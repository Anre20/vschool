import React from 'react';

const Badge = ({ badge, index }) => {
  const colors = ['red', 'blue'];
  const color = colors[index % colors.length];

  return (
    <div className="badge">
      <h2 style={{ backgroundColor: color }}>Badge</h2>
      <p>Name: {badge.firstName} {badge.lastName}</p>
      <p>Email: {badge.email}</p>
      <p>Place of Birth: {badge.birthPlace}</p>
      <p>Phone: {badge.phone}</p>
      <p>Favorite Food: {badge.favoriteFood}</p>
      <p>About: {badge.about}</p>
    </div>
  );
};

export default Badge;
