import React from "react";
import InsertTodo from "../components/InsertTodo";
import TodoList from "../components/TodoList";

const TodoPage = () => (
  <div>
    <h1>ToDo Page</h1>
    <InsertTodo />
    <TodoList />
  </div>
);

export default TodoPage;
