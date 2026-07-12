const express = require("express");
const router = express.Router();

const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  toggleTodoStatus,
} = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

// Protected Route
router.post("/", authMiddleware, createTodo);
router.get("/", authMiddleware, getTodos);
router.get("/:id", authMiddleware, getTodoById);
router.put("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);
router.patch("/:id/status", authMiddleware, toggleTodoStatus);

module.exports = router;