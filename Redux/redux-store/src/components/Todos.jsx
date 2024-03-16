import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li style={{display:"flex", columnGap:"5px"}} key={todo.id}>
            <div>{todo.text}</div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
