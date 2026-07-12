import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/add-todo" element={<AddTodo />} />

  <Route path="/edit/:id" element={<EditTodo />} />

</Routes>
  );
}

export default App;