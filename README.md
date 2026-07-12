# TaskFlow - Task Manager Application

TaskFlow is a full-stack task management web application that allows users to securely manage their daily tasks.  
The application provides user authentication, task CRUD operations, searching, and task filtering functionality.

## Features

- User Registration and Login
- JWT Authentication
- Create, Read, Update, and Delete Tasks (CRUD)
- Search Tasks
- Filter Tasks (All, Pending, Completed)
- User-specific Task Management
- Responsive React Frontend
- MongoDB Database Integration

## Installation and Setup

### Backend Setup

First, run the main project folder (Backend) and install the dependencies through "npm install"
Backend will run on:http://localhost:5000

## Frontend Setup

Open a new terminal and move into the frontend folder:cd frontend
Install frontend dependencies:npm install
Start the React application:npm run dev
Frontend will run on:http://localhost:5173

## Dependencies Installation

1. npm install express mongoose cors dotenv jsonwebtoken bcrypt-->backend dependencies
2. npm install axios react-router-dom react-icons--> frontend dependencies

## Environment Variables

Create a .env file inside the backend folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Project Overview

TaskFlow is a complete task tracking web application built using React, Express, and MongoDB.

It allows users to create, manage, update, delete, search, and filter their tasks efficiently with secure authentication and a user-friendly interface.
