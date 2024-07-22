import React from 'react';

const Die = ({ number, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '50px',
        height: '50px',
        display: 'inline-block',
        margin: '5px',
        lineHeight: '50px',
        textAlign: 'center',
        border: '1px solid black',
        backgroundColor: selected ? 'lightblue' : 'white'
      }}
    >
      {number}
    </div>
  );
};

export default Die;
