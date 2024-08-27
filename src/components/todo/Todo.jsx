import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiEdit } from "react-icons/ti";
import DeleteButton from "../Delete/delete";
import EditButton from "../Edit/Edit";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className=" border-2   m-2 p-2  ">
      <div
        className={todo.isComplete ? "todo-row complete " : "todo-row flex justify-between text-2xl "}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons flex space-x-4  ">
          <DeleteButton
            onClick={() => removeTodo(todo.id)}
            className="delete-icon bg-red-600"
          />
          <EditButton
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon bg-blue-600"
          />
        </div>
      </div>
    </div>
  ));
};

export default Todo;
