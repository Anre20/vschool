import React, { useState } from 'react';
import axios from 'axios';

const BountyList = ({ bounties, onBountyDeleted, onBountyEdited }) => {
  const [editingBounty, setEditingBounty] = useState(null);
  const [formData, setFormData] = useState({});

  const handleDelete = (id) => {
    if (id) {
      console.log(`Deleting bounty with id: ${id}`);
      axios.delete(`http://localhost:9500/bounty/${id}`)
        .then(() => {
          onBountyDeleted(id);
        })
        .catch(error => console.error('Error deleting bounty:', error));
    } else {
      console.error('Bounty ID is undefined');
    }
  };

  const handleEdit = (bounty) => {
    setEditingBounty(bounty.id);
    setFormData(bounty);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:9500/bounty/${editingBounty}`, formData)
      .then(response => {
        onBountyEdited(response.data);
        setEditingBounty(null);
      })
      .catch(error => console.error('Error editing bounty:', error));
  };

  return (
    <div>
      {bounties.map(bounty => (
        <div key={bounty.id}>
          {editingBounty === bounty.id ? (
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
              <input
                type="number"
                name="bountyAmount"
                value={formData.bountyAmount}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <h3>{bounty.firstName} {bounty.lastName}</h3>
              <p>Type: {bounty.type}</p>
              <p>Bounty Amount: {bounty.bountyAmount}</p>
              <button onClick={() => handleDelete(bounty.id)}>Delete</button>
              <button onClick={() => handleEdit(bounty)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BountyList;
