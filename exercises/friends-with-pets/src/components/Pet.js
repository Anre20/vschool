import React from 'react';
import './Pet.css'; // Import the CSS for styling

const Pet = ({ name, breed }) => {
    return (
        <div className="pet">
            <h3>{name}</h3>
            <p>{breed}</p>
        </div>
    );
};

export default Pet;
