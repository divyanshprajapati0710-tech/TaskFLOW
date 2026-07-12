import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaSave,
} from "react-icons/fa";
import API from "../services/api";

function EditTodo() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const res = await API.get(`/todos/${id}`);

      setFormData(res.data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/todos/${id}`, formData);

      alert("Todo Updated Successfully");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="page-container">

      <div
        className="glass-card"
        style={{
          maxWidth: "650px",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "30px",
          }}
        >
          Edit Task
        </h1>

        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "20px" }}>
            <input
              className="input-field"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <textarea
              className="input-field"
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{
                resize: "none",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "25px",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >

            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />

            Mark as Completed

          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >

            <button
              type="button"
              className="danger-btn"
              onClick={() => navigate("/dashboard")}
            >
              <FaArrowLeft />
              &nbsp; Cancel
            </button>

            <button className="success-btn">
              <FaSave />
              &nbsp; Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditTodo;