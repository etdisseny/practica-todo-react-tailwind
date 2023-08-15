import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  //en este caso solo necesito el title, por eso creo este estaado que inicializo con un string vacio
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md overflow-hidden p-4 flex gap-4 items-center mt-8"
    >
      <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
