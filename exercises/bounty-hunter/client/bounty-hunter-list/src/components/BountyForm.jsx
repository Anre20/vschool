import React, { useState } from 'react';
import axios from 'axios';

const BountyForm = ({ onBountyAdded }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    type: '',
    bountyAmount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9500/bounty', formData)
      .then(response => {
        onBountyAdded(response.data);
        setFormData({ firstName: '', lastName: '', type: '', bountyAmount: '' });
      })
      .catch(error => console.error('Error adding bounty:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <input name="type" value={formData.type} onChange={handleChange} placeholder="Type" />
      <input name="bountyAmount" value={formData.bountyAmount} onChange={handleChange} placeholder="Bounty Amount" />
      <button type="submit">Add Bounty</button>
    </form>
  );
};

export default BountyForm;
