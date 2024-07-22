import React, { useState } from 'react';
import Square from './Square';

const DJBoard = () => {
  const [colors, setColors] = useState(["white", "white", "white", "white"]);

  const toggleBlackWhite = () => {
    const newColor = colors[0] === "white" ? "black" : "white";
    setColors([newColor, newColor, newColor, newColor]);
  };

  const turnTopHalfPurple = () => {
    setColors(["purple", "purple", colors[2], colors[3]]);
  };

  const turnBottomLeftBlue = () => {
    setColors([colors[0], colors[1], "blue", colors[3]]);
  };

  const turnBottomRightBlue = () => {
    setColors([colors[0], colors[1], colors[2], "blue"]);
  };

  const changeTopLeftRed = () => {
    setColors(["red", colors[1], colors[2], colors[3]]);
  };

  const changeTopRightGreen = () => {
    setColors([colors[0], "green", colors[2], colors[3]]);
  };

  const changeBottomLeftYellow = () => {
    setColors([colors[0], colors[1], "yellow", colors[3]]);
  };

  const changeBottomRightOrange = () => {
    setColors([colors[0], colors[1], colors[2], "orange"]);
  };

  return (
    <div>
      <div className="grid">
        {colors.map((color, index) => (
          <Square key={index} color={color} />
        ))}
      </div>
      <button onClick={toggleBlackWhite}>Toggle Black/White</button>
      <button onClick={turnTopHalfPurple}>Turn Top Half Purple</button>
      <button onClick={turnBottomLeftBlue}>Turn Bottom Left Blue</button>
      <button onClick={turnBottomRightBlue}>Turn Bottom Right Blue</button>
      <button onClick={changeTopLeftRed}>Change Top Left Red</button>
      <button onClick={changeTopRightGreen}>Change Top Right Green</button>
      <button onClick={changeBottomLeftYellow}>Change Bottom Left Yellow</button>
      <button onClick={changeBottomRightOrange}>Change Bottom Right Orange</button>
    </div>
  );
};

export default DJBoard;
