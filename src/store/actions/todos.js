export function addTodo(text) {
  return {
    type: "ADD_TODO",
    text
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    id
  };
}

export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id
  };
}

export function cleanTodos() {
  return {
    type: "CLEAN_TODOS"
  };
}

export function toggleAll() {
  return {
    type: "TOGGLE_ALL"
  };
}
