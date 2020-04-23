import React, { useReducer } from "react";
import { reducer, todo } from "../reducers/reducer";
import { Todo } from "./todo";
import { TodoForm } from "./todoForm";

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};
