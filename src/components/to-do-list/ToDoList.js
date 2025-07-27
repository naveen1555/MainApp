import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewToDo] = useState("");

  const inputchange = (e) => {
    setNewToDo(e.target.value);
  };

  const addNewToDo = () => {
    if (newtodo !== "") {
      setTodos([...todos, newtodo]);
      setNewToDo("");
      console.log("add");
    }
  };

  const DeleteTodo = (id) => {
    const updatedtodos = todos.filter((each, index) => index !== id);
    setTodos(updatedtodos);
    console.log("delete");
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={inputchange}
          value={newtodo}
          placeholder="add new to do"
        />
        <button onClick={addNewToDo}>Add new To Do</button>
      </div>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            {todo} <button onClick={() => DeleteTodo(id)}>Delete To do</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
