import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa";
import API from "../services/api";

function AddTodo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/todos", formData);

      alert("Todo Added Successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add todo");
    }
  };

  return (
    <div className="page-container">
      <div className="glass-card" style={{ maxWidth: "650px" }}>

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Create New Task
        </h1>

        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: "20px" }}>
            <input
              className="input-field"
              type="text"
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <textarea
              className="input-field"
              rows="6"
              name="description"
              placeholder="Task Description"
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
              &nbsp; Back
            </button>

            <button className="primary-btn">
              <FaPlusCircle />
              &nbsp; Add Todo
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddTodo;