import React, { useState } from 'react';
import axios from 'axios';

const EditBountyForm = ({ bounty, onBountyUpdated }) => {
  const [firstName, setFirstName] = useState(bounty.firstName);
  const [lastName, setLastName] = useState(bounty.lastName);
  const [living, setLiving] = useState(bounty.living);
  const [bountyAmount, setBountyAmount] = useState(bounty.bountyAmount);
  const [type, setType] = useState(bounty.type);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBounty = { ...bounty, firstName, lastName, living, bountyAmount, type };
      const response = await axios.put(`http://localhost:9500/bounty/${bounty.id}`, updatedBounty);
      onBountyUpdated(response.data);
    } catch (error) {
      console.error('Error updating bounty:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input type="checkbox" checked={living} onChange={(e) => setLiving(e.target.checked)} /> Living
      <input type="number" value={bountyAmount} onChange={(e) => setBountyAmount(e.target.value)} placeholder="Bounty Amount" />
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
      <button type="submit">Update Bounty</button>
    </form>
  );
};

export default EditBountyForm;
