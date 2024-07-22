import React, { useState } from 'react';
import Die from './Die';

const DiceBox = () => {
  const [numbers, setNumbers] = useState([null, null, null, null, null]);
  const [selected, setSelected] = useState([false, false, false, false, false]);
  const [rollCount, setRollCount] = useState(0);

  const rollDice = () => {
    setNumbers(numbers.map((num, idx) => selected[idx] ? num : Math.floor(Math.random() * 6) + 1));
    setRollCount(rollCount + 1);
    if ((rollCount + 1) % 3 === 0) {
      resetDice();
    }
  };

  const toggleSelect = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const resetDice = () => {
    setSelected([false, false, false, false, false]);
    setNumbers([null, null, null, null, null]);
    setRollCount(0);
  };

  return (
    <div>
      <div>
        {numbers.map((number, index) => (
          <Die
            key={index}
            number={number !== null ? number : '-'}
            onClick={() => toggleSelect(index)}
            selected={selected[index]}
          />
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default DiceBox;
