import React, { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = (event) => {
    setItem(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item,
    });
    setItem("");
  };

  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="todo" hidden>
          Todo
        </label>
        <input
          name="todo"
          onChange={handleChanges}
          value={item}
          placeholder="Add Todo"
        />
        <button>Add Item</button>
        <button onClick={clearCompleted}>Clear Todo</button>
      </form>
    </div>
  );
};
