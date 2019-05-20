import React from "react";

import { connect } from "react-redux";

function TodoCounter({ todos }) {
  const finished = todos.filter(todo => todo.finished);
  const pending = todos.filter(todo => !todo.finished);

  return (
    <div>
      {pending.length > 0 ? (
        <p className="pending">You have {pending.length} todos pending!</p>
      ) : (
        ""
      )}
      {(pending.length === 0) & (finished.length > 0) ? (
        <p className="finished">
          All yours {todos.length} todos are done!! Congratulations!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoCounter);
