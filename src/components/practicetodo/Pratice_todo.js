import { React, useState } from "react";
import "./practicetodo.css";
const PracticeTodo = () => {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const handleinput = (e) => {
        setTodo(e.target.value);
    };

    const CreateToDo = () => {
        if (todo !== "") {
            setTodolist([...todolist, todo]);
            setTodo("");
        }
    };

    const DeleteTodo = (id) => {
        const newTodoList = todolist.filter((each, index) => index !== id);
        setTodolist(newTodoList);
    };

    return (
        <>
            <div>
                <input type="text" value={todo} onChange={handleinput}></input>
                <button className="btn" onClick={CreateToDo}>
                    Create To Do
                </button>
            </div>
            <ul>
                {todolist.map((eachtodo, id) => {
                    return (
                        <li key={id}>
                            <span className="todotext">{eachtodo}</span>
                            <button onClick={() => DeleteTodo(id)}>
                                Delete To do
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default PracticeTodo;
