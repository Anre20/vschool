import React, { useState, useEffect } from 'react';

const RandomColorDiv = () => {
  const [color, setColor] = useState('');

  const fetchRandomColor = () => {
    fetch('https://random-color.onrender.com/colors/random')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        if (data && data.hex) {
          setColor(data.hex);
        } else {
          console.error('No color found in response:', data);
        }
      })
      .catch(err => {
        console.error('Error fetching color:', err);
      });
  };

  useEffect(() => {
    fetchRandomColor();
  }, []);

  const handleClick = () => {
    fetchRandomColor();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: color || 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      Click me to change color
    </div>
  );
};

export default RandomColorDiv;
