import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Helper function to find todos by their text content
const getTodoItem = (text) => screen.getByText(text, { selector: "li" });

describe("TodoList Component Functionality", () => {
  // Test 1: Initial Render Test
  test("renders the initial list of todos", () => {
    render(<TodoList />);

    // Check for the presence of initial todos
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();

    // Check completion status (required for full check)
    expect(getTodoItem("Walk the dog")).toHaveStyle(
      "text-decoration: line-through"
    );
    expect(getTodoItem("Buy groceries")).toHaveStyle("text-decoration: none");
  });

  // Test 2: Test Adding Todos
  test("allows users to add a new todo item", () => {
    render(<TodoList />);

    // 1. Identify input and button using data-testid
    const inputElement = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");
    const newTodoText = "New Task to Test";

    // 2. Simulate user typing
    fireEvent.change(inputElement, { target: { value: newTodoText } });

    // 3. Simulate form submission (clicking the button)
    fireEvent.click(addButton);

    // 4. Verify the new todo is in the document
    expect(screen.getByText(newTodoText)).toBeInTheDocument();
  });

  // Test 3: Test Toggling Todos
  test("allows users to toggle the completion status of a todo", () => {
    render(<TodoList />);

    // Target an incomplete todo (Buy groceries - ID 1)
    const incompleteTodo = getTodoItem("Buy groceries");

    // Initial check: Should be incomplete
    expect(incompleteTodo).toHaveStyle("text-decoration: none");

    // 1. Simulate clicking the item to toggle its state (Incomplete -> Complete)
    fireEvent.click(incompleteTodo);

    // 2. Verify state change: Should now be completed
    expect(incompleteTodo).toHaveStyle("text-decoration: line-through");

    // 3. Simulate clicking again to toggle back (Complete -> Incomplete)
    fireEvent.click(incompleteTodo);

    // 4. Verify state change: Should now be incomplete again
    expect(incompleteTodo).toHaveStyle("text-decoration: none");
  });

  // Test 4: Test Deleting Todos
  test("allows users to delete a todo item", () => {
    render(<TodoList />);

    const todoTextToDelete = "Buy groceries";

    // 1. Verify the todo is initially present
    expect(screen.getByText(todoTextToDelete)).toBeInTheDocument();

    // 2. Find the delete button associated with ID 1
    const deleteButtonForId1 = screen.getByTestId("delete-button-1");

    // 3. Simulate clicking the delete button
    fireEvent.click(deleteButtonForId1);

    // 4. Verify the todo item is removed from the document
    expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  });
});
