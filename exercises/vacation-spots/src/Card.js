import React from 'react';
import './Card.css'; 

const Card = ({ place, price, timeToGo }) => {
    let backgroundColor;
    switch (timeToGo) {
        case "Spring":
            backgroundColor = "#d4edda"; // Light green
            break;
        case "Summer":
            backgroundColor = "#f8d7da"; // Light red
            break;
        case "Fall":
            backgroundColor = "#fff3cd"; // Light yellow
            break;
        case "Winter":
            backgroundColor = "#d1ecf1"; // Light blue
            break;
        default:
            backgroundColor = "#f0f0f0"; // Default light grey
    }

    const dollarSigns = price < 500 ? "$" : price < 1000 ? "$$" : "$$$";

    return (
        <div className="card" style={{ backgroundColor }}>
            <h2>{place}</h2>
            <p>Price: {dollarSigns}</p>
            <p>Best time to visit: {timeToGo}</p>
        </div>
    );
};

export default Card;
