import React, { useState, useEffect } from "react";
import axios from "axios";
import BountyForm from "./components/BountyForm";
import BountyList from "./components/BountyList";

const App = () => {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9500/bounty")
      .then(response => setBounties(response.data))
      .catch(error => console.error("Error fetching bounties:", error));
  }, []);

  const addBounty = (newBounty) => {
    axios.post("http://localhost:9500/bounty", newBounty)
      .then(response => {
        setBounties([...bounties, response.data]);
      })
      .catch(error => console.error("Error adding bounty:", error));
  };

  const deleteBounty = (id) => {
    console.log(`Deleting bounty with id: ${id}`);
    axios.delete(`http://localhost:9500/bounty/${id}`)
      .then(() => {
        setBounties(bounties.filter(bounty => bounty.id !== id));
      })
      .catch(error => console.error("Error deleting bounty:", error));
  };

  const editBounty = (updatedBounty) => {
    axios.put(`http://localhost:9500/bounty/${updatedBounty.id}`, updatedBounty)
      .then(response => {
        setBounties(bounties.map(bounty => bounty.id === updatedBounty.id ? updatedBounty : bounty));
      })
      .catch(error => console.error("Error editing bounty:", error));
  };

  return (
    <div>
      <h1>Bounty Hunter</h1>
      <BountyForm onBountyAdded={addBounty} />
      <BountyList bounties={bounties} onBountyDeleted={deleteBounty} onBountyEdited={editBounty} />
    </div>
  );
};

export default App;
