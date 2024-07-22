import React from 'react';
import Card from './Card.js';
import './App.css';

const vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    },{
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
];

function App() {
    return (
        <div className="app">
            {vacationSpots.map((spot, index) => (
                <Card
                    key={index}
                    place={spot.place}
                    price={spot.price}
                    timeToGo={spot.timeToGo}
                />
            ))}
        </div>
    );
}

export default App;
