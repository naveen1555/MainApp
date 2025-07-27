import React, { useState } from "react";

function RectangleBox() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWidthChange = (event) => {
    setWidth(Number(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value));
  };

  const generateRectangleBox = () => {
    let box = "";
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        box += "*";
      }
      box += "\n";
    }
    return box;
  };

  return (
    <div>
      <label htmlFor="width-input">Width:</label>
      <input
        id="width-input"
        type="number"
        value={width}
        onChange={handleWidthChange}
      />

      <label htmlFor="height-input">Height:</label>
      <input
        id="height-input"
        type="number"
        value={height}
        onChange={handleHeightChange}
      />

      <pre>{generateRectangleBox()}</pre>
    </div>
  );
}

export default RectangleBox;
