export const todo = [
  {
    item: "Do the thing",
    completed: false,
    id: 48957287,
  },
  {
    item: "Do that other thing",
    completed: false,
    id: 57208967,
  },
  {
    item: "Do that other, other thing",
    completed: false,
    id: 17463558,
  },
];

export const reducer = (state, action) => {
  console.log("Reducer State", state, "Reducer Action", action);
  switch (action.type) {
    case "ADD_TODO":
      console.log("Reducer Case State", state);
      return [
        ...state,
        {
          item: action.payload,
          id: Date.now(),
          completed: false,
        },
      ];
    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
