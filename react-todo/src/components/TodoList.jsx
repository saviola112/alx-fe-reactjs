import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Walk the dog', completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextId] = useState(3);

  const handleAddTodo = (text) => {
    const newTodo = { id: nextId, text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNextId((prevId) => prevId + 1);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              marginBottom: '5px'
            }}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
            <button 
              onClick={(e) => { 
                // Stop propagation prevents the li's onClick (toggle) from firing
                e.stopPropagation(); 
                handleDeleteTodo(todo.id); 
              }}
              data-testid={`delete-button-${todo.id}`}
              style={{ marginLeft: '10px', color: 'red', border: 'none', background: 'none' }}
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