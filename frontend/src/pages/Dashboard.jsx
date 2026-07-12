import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaTasks,
  FaSignOutAlt,
} from "react-icons/fa";

import API from "../services/api";


function Dashboard() {

  const navigate = useNavigate();


  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  // New filter state
  const [filter, setFilter] = useState("all");



  useEffect(() => {

    fetchTodos();

  }, []);



  const fetchTodos = async () => {

    try {

      const res = await API.get("/todos");

      setTodos(res.data.todos);

    } catch (error) {

      console.log(error);

    }

  };




  // Delete Todo

  const deleteTodo = async (id) => {


    if (!window.confirm("Delete this task?"))
      return;



    try {

      await API.delete(`/todos/${id}`);

      fetchTodos();


    } catch (error) {

      console.log(error);

    }

  };





  // Toggle Status

  const toggleStatus = async (id) => {


    try {


      await API.patch(`/todos/${id}/status`);


      fetchTodos();


    } catch(error) {


      alert(
        error.response?.data?.message ||
        "Failed to update status"
      );


    }


  };






  // Search + Filter Logic

  const filteredTodos = useMemo(() => {


    return todos.filter((todo)=>{


      const matchesSearch =
      todo.title
      .toLowerCase()
      .includes(search.toLowerCase())

      ||
      todo.description
      .toLowerCase()
      .includes(search.toLowerCase());




      const matchesFilter =
      filter === "all"
      ? true

      :

      filter === "completed"
      ? todo.completed

      :

      !todo.completed;




      return matchesSearch && matchesFilter;



    });



  },[todos,search,filter]);







  const completed =
  todos.filter(
    (todo)=>todo.completed
  ).length;



  const pending =
  todos.length - completed;






  const logout = ()=>{


    localStorage.removeItem("token");

    navigate("/");


  };






return (

<div className="page-container">


<div className="glass-card">



<h1
style={{
textAlign:"center",
color:"white",
marginBottom:"10px"
}}
>
My Todos
</h1>



<p
style={{
textAlign:"center",
color:"#eee",
marginBottom:"35px"
}}
>
Stay productive and organize your work efficiently.
</p>






{/* Stats */}


<div className="stats">


<div className="stat-card">

<FaTasks size={28}/>

<h2>{todos.length}</h2>

<span>Total</span>

</div>




<div className="stat-card">

<FaClock size={28}/>

<h2>{pending}</h2>

<span>Pending</span>

</div>




<div className="stat-card">

<FaCheckCircle size={28}/>

<h2>{completed}</h2>

<span>Completed</span>

</div>


</div>







{/* Search */}


<div className="search-box">


<FaSearch/>


<input

type="text"

placeholder="Search your tasks..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>







{/* FILTER BUTTONS */}

<div className="filter-buttons">


<button

className={
filter==="all"
?
"active-filter"
:
""
}

onClick={()=>setFilter("all")}

>
All
</button>




<button

className={
filter==="pending"
?
"active-filter"
:
""
}

onClick={()=>setFilter("pending")}

>
Pending
</button>




<button

className={
filter==="completed"
?
"active-filter"
:
""
}

onClick={()=>setFilter("completed")}

>
Completed
</button>


</div>








{/* ACTION BUTTONS */}


<div className="dashboard-actions">


<button

className="primary-btn"

onClick={()=>navigate("/add-todo")}

>

<FaPlus/>

&nbsp; New Task

</button>





<button

className="danger-btn"

onClick={logout}

>

<FaSignOutAlt/>

&nbsp; Logout

</button>


</div>










{/* TODO LIST */}



<div className="todo-grid">


{
filteredTodos.length===0

?

<h3
style={{
color:"white",
textAlign:"center",
marginTop:"40px"
}}
>

No Tasks Found

</h3>


:

filteredTodos.map((todo)=>(


<div
className="todo-card"
key={todo._id}
>


<h2>
{todo.title}
</h2>




<p>
{todo.description}
</p>





<div className="status">


{
todo.completed

?

<span className="completed">

<FaCheckCircle/>

&nbsp; Completed

</span>


:


<span className="pending">

<FaClock/>

&nbsp; Pending

</span>


}



</div>







<div className="todo-buttons">



<button

className="status-btn"

onClick={()=>toggleStatus(todo._id)}

>


{
todo.completed

?

"↩ Mark Pending"

:

"✔ Complete"

}



</button>





<button

className="primary-btn"

onClick={()=>
navigate(`/edit/${todo._id}`)
}

>

<FaEdit/>

</button>





<button

className="danger-btn"

onClick={()=>
deleteTodo(todo._id)
}

>

<FaTrash/>

</button>



</div>





</div>



))


}



</div>





</div>


</div>


);


}


export default Dashboard;