import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

// Initial state as required by the task
const initialTodos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextId] = useState(3);

  // Method 1: Add Todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  // Method 2: Toggle Todo
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Method 3: Delete Todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div data-testid="todo-list-container">
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "5px",
            }}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
            <button
              onClick={(e) => {
                // Stop propagation to prevent toggleTodo from firing
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
