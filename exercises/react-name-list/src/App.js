import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a name"
      />
      <button onClick={handleAddName}>Add Name</button>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
