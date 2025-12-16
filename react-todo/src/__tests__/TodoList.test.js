import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

const getTodoItem = (text) => screen.getByText(text, { selector: "li" });

describe("TodoList Component Functionality", () => {
  // Test 1: Initial Render Test
  test("renders the initial list of todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();

    // Check styles for completion status
    expect(getTodoItem("Walk the dog")).toHaveStyle(
      "text-decoration: line-through"
    );
    expect(getTodoItem("Buy groceries")).toHaveStyle("text-decoration: none");
  });

  // Test 2: Test Adding Todos
  test("allows users to add a new todo item", () => {
    render(<TodoList />);

    const inputElement = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");
    const newTodoText = "New Task to Check";

    fireEvent.change(inputElement, { target: { value: newTodoText } });
    fireEvent.click(addButton);

    expect(screen.getByText(newTodoText)).toBeInTheDocument();
  });

  // Test 3: Test Toggling Todos
  test("allows users to toggle the completion status of a todo", () => {
    render(<TodoList />);

    const incompleteTodo = getTodoItem("Buy groceries");

    // Toggle 1: Incomplete -> Complete
    fireEvent.click(incompleteTodo);
    expect(incompleteTodo).toHaveStyle("text-decoration: line-through");

    // Toggle 2: Complete -> Incomplete
    fireEvent.click(incompleteTodo);
    expect(incompleteTodo).toHaveStyle("text-decoration: none");
  });

  // Test 4: Test Deleting Todos
  test("allows users to delete a todo item", () => {
    render(<TodoList />);

    const todoTextToDelete = "Buy groceries";

    expect(screen.getByText(todoTextToDelete)).toBeInTheDocument();

    // The delete button for the first initial item (ID 1)
    const deleteButtonForId1 = screen.getByTestId("delete-button-1");

    fireEvent.click(deleteButtonForId1);

    // CRITICAL: Assert removal using queryByText and .not.toBeInTheDocument()
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});
