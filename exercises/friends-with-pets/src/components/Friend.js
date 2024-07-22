import React from 'react';
import Pet from './Pet';
import './Friend.css'; 

const Friend = ({ name, age, pets }) => {
    return (
        <div className="friend">
            <h2>{name}, {age}</h2>
            <div className="pets">
                {pets.map((pet, index) => (
                    <Pet
                        key={index}
                        name={pet.name}
                        breed={pet.breed}
                    />
                ))}
            </div>
        </div>
    );
};

export default Friend;
