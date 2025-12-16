import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

// Initial state as required by the task
const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  // Ensure nextId is tracked for new todos
  const [nextId, setNextId] = useState(3);

  // Method 1: Add Todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNextId((prevId) => prevId + 1);
  };

  // Method 2: Toggle Todo (by clicking the <li>)
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Method 3: Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div data-testid="todo-list-container">
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            // Add required click handler for toggle
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              // Add required style for visual toggle check
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "5px",
            }}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
            <button
              onClick={(e) => {
                // CRITICAL: Stop propagation to prevent handleToggleTodo from firing on button click
                e.stopPropagation();
                handleDeleteTodo(todo.id);
              }}
              data-testid={`delete-button-${todo.id}`}
              style={{
                marginLeft: "10px",
                color: "red",
                border: "none",
                background: "none",
              }}
            >
              [X]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
