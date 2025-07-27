import React from "react";
import { useState } from "react";
import classes from "./addUser.module.css";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [newUser, setNewUser] = useState([]);
  const [error, setError] = useState();

  const onchangeName = (e) => {
    setUserName(e.target.value);
  };

  const onchangeAge = (e) => {
    setAge(e.target.value);
  };

  const adduser = (e) => {
    e.preventDefault();
    console.log(userName, age);

    if (userName.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty value).",
      });
      console.log(error);
      return;
    }

    if (age.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (non-empty value).",
      });
      console.log(error);
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      console.log(error);
      return;
    }

    setNewUser([...newUser, { name: userName, age: age }]);

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ name: userName, age: age })
    );
    console.log(JSON.parse(localStorage.getItem("userInfo")));
    setUserName("");
    setAge("");
    setError("");
    const errorHandler = () => {
      setError(null);
    };
  };

  return (
    <div>
      {error && (
        <div className={classes.errorcard}>
          <div className={classes.errorHeading}>Invalid Input</div>

          <div className={classes.errorMessage}>
            {error.title}
            {error.message}
          </div>
          <button className={classes.errorOkbButton}>Okay</button>
        </div>
      )}

      <form onSubmit={adduser} className={classes.form}>
        <label htmlFor="username">Username</label>
        <input
          onChange={onchangeName}
          type="text"
          value={userName}
          id="username"
        />
        <label htmlFor="age">Age (Years)</label>
        <input onChange={onchangeAge} type="number" value={age} id="age" />
        <button className={classes.button} type="submit">
          Add User
        </button>
      </form>
      <ul className={classes.userListContainer}>
        {newUser.length >= 0 &&
          newUser.map((item, index) => (
            <li className={classes.userContainer} key={index}>
              {item.name} {item.age}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AddUser;
