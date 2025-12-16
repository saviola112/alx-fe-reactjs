import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        data-testid="todo-input"
        name="todo-text-input"
      />
      <button type="submit" data-testid="add-button">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
