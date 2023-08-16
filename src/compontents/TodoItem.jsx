import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import { useState } from "react";

const TodoItem = ({ todo, removeTodo, changeStateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-300">
      {/* <button className="rounded-full border-2 w-5 h-5 inline-block flex-none">
      </button> */}
      <button
        onClick={() => changeStateTodo(id)}
        className={`rounded-full border-2 w-5 h-5 ${
          completed &&
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 grid place-items-center"
        }
       "
      `}
      >
        {completed && <IconCheck />}
      </button>
      <p
        className={`text-gray-600 grow ${
          completed && "line-through text-gray-300"
        }`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};
export default TodoItem;
