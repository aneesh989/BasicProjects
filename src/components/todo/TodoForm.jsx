import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent rounded-md border-2 border-red-700 p-2 m-2 w-96 "
          />
          <button
            onClick={handleSubmit}
            className="todo-button edit  bg-yellow-400 hover:bg-yellow-500 p-1 rounded-md m-2"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent rounded-md border-2 border-blue-300 p-2 m-2 w-96"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="todo-button  bg-yellow-400 hover:bg-yellow-500 p-1 rounded-md m-2"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
