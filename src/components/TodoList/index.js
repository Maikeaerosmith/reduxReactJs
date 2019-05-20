import React, { useState } from "react";

import "./styles.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../store/actions/todos";

function TodoList({
  todos,
  addTodo,
  removeTodo,
  toggleTodo,
  cleanTodos,
  toggleAll
}) {
  const [text, setText] = useState("");

  function handleAddTodo() {
    if (!text || text.trim() === "") return false;
    addTodo(text);
    setText("");
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <p>
        <input
          className="todoText"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyUp={e => (e.key === "Enter" ? handleAddTodo() : false)}
        />
      </p>
      <div className="btnGroup">
        <button className="addTodo" onClick={() => handleAddTodo()}>
          Add Todo
        </button>
        <button className="cleanTodos" onClick={() => cleanTodos()}>
          Clean Todos
        </button>
        <button className="toggleAll" onClick={() => toggleAll()}>
          Toggle All
        </button>
      </div>
      {todos.length > 0 ? (
        todos.map(todo => (
          <li
            className="listItem"
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
          >
            <span className={todo.finished ? "concluido" : ""}>
              {todo.text}
            </span>
            &nbsp;
            <button className="removeBtn" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
            &nbsp;
          </li>
        ))
      ) : (
        <p>You have 0 todos.. Add one on the input above...</p>
      )}
      {}
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
