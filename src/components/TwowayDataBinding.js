import React from "react";
import { useState } from "react";

const TwowayDataBinding = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>{num}</h1>
      <input value={num} onChange={(e) => setNum(e.target.value)}></input>
      <button onClick={() => setNum(100)}>set to 100</button>
    </div>
  );
};

export default TwowayDataBinding;
