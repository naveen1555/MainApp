import React, { useState, useEffect, useCallback } from "react";

function LeftRightClickPage() {
  const [curr, setCurr] = useState(0);

  const leftClick = useCallback(() => {
    setCurr((prevCurr) => prevCurr - 1);
  }, []);

  const rightClick = useCallback(() => {
    setCurr((prevCurr) => prevCurr + 1);
  }, []);

  const handleKeypress = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        leftClick();
      } else if (e.keyCode === 39) {
        rightClick();
      }
    },
    [leftClick, rightClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => document.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  return (
    <>
      <button onClick={leftClick}>prev</button>
      {"   "}
      {curr}
      {"   "}
      <button onClick={rightClick}>next</button>
    </>
  );
}

export default LeftRightClickPage;
