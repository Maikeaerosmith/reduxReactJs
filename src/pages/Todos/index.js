import React from "react";

import TodoList from "../../components/TodoList";
import TodoCounter from "../../components/TodoCounter";

export default function Todos() {
  return (
    <div className="container">
      <TodoList />
      <TodoCounter />
    </div>
  );
}
