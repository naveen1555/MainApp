import { React, useState, useEffect, useRef } from "react";

const Trail = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const increment = () => {
    // setCount(count + 1);
  };
  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log(count);
  //       setCount(count + 1);
  //     }, 1000);
  //   }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increase</button>
      <input type="text" name="text" ref={inputRef} />
    </div>
  );
};

export default Trail;
