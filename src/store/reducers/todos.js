const INITIAL_STATE = [];

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.text }];

    case "REMOVE_TODO":
      const filtered = state.filter(state => state.id !== action.id);
      return filtered;

    case "TOGGLE_TODO": {
      const newTodos = state.map(todo =>
        todo.id === action.id ? { ...todo, finished: !todo.finished } : todo
      );
      return newTodos;
    }

    case "TOGGLE_ALL": {
      const newTodos = state.map(todo =>
        true ? { ...todo, finished: !todo.finished } : todo
      );

      return newTodos;
    }

    case "CLEAN_TODOS":
      return [];

    default:
      return state;
  }
}
