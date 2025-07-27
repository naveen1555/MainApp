import { React, useState, useEffect, useRef } from "react";
import "./counter.css";

const Counter = () => {
  const [num, setNum] = useState(0);
  const intervalRef= useRef(null);

  const startTimer = () => {
if (intervalRef.current!==null) return
intervalRef.current = setInterval(()=>{
setNum(prev=>prev+1)

},1000)
}
console.log(num)

const pauseTimer=()=>{
if(intervalRef.current!==null){
clearInterval(intervalRef.current);
intervalRef.current=null
}
}

const resetTimer=()=>{
  setNum(0)

}


  return (
    <>
      <h1>{num}</h1>
      <button
           className="button" onClick={startTimer}>Start
      </button>
      <button className="button"  onClick={pauseTimer}>Pause</button>
            <button className="button"  onClick={resetTimer}>Reset</button>

      {/* <input type="text" name="name" ref={inputRef}></input> */}
    </>
  );
};

export default Counter;
