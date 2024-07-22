import React, { useState } from 'react';
import BadgeForm from './components/BadgeForm';
import Badge from './components/Badge';
import './App.css';

function App() {
  const [badges, setBadges] = useState([]);

  const addBadge = (badge) => {
    setBadges([...badges, badge]);
  };

  return (
    <div className="App">
      <h1>Name Badge Maker</h1>
      <BadgeForm addBadge={addBadge} />
      <div className="badge-list">
        {badges.map((badge, index) => (
          <Badge key={index} badge={badge} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
