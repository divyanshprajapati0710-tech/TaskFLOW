const Todo = require("../models/Todo");

// ==========================
// Create Todo
// ==========================
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Todos
// ==========================
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: todos.length,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Todo
// ==========================
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Todo
// ==========================
const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    if (title !== undefined) {
      todo.title = title;
    }

    if (description !== undefined) {
      todo.description = description;
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    await todo.save();

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Todo
// ==========================
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    await Todo.findByIdAndDelete(todo._id);

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Toggle Todo Status
// ==========================
const toggleTodoStatus = async (req, res) => {
  try {

    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }


    // Toggle completed status

    todo.completed = !todo.completed;

    await todo.save();


    res.status(200).json({
      success: true,
      message: "Todo status updated successfully",
      todo,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    toggleTodoStatus,
};