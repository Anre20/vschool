const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 9500;
const cors = require('cors');

app.use(cors());
app.use(express.json());

let bounties = [];

app.get('/bounty', (req, res) => {
    res.json(bounties);
});

app.post('/bounty', (req, res) => {
    const { firstName, lastName, living, bountyAmount, type } = req.body;

    const newBounty = {
        id: uuidv4(),
        firstName,
        lastName,
        living,
        bountyAmount,
        type
    };

    bounties.push(newBounty);

    res.status(201).json(newBounty); 
});

app.delete('/bounty/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = bounties.length;
    bounties = bounties.filter(bounty => bounty.id !== id);
    if (bounties.length < initialLength) {
        res.send('Successfully deleted bounty!');
    } else {
        res.status(404).send('Bounty not found!');
    }
});

app.put('/bounty/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, living, bountyAmount, type } = req.body;
    const bounty = bounties.find(bounty => bounty.id === id);
    if (bounty) {
        bounty.firstName = firstName;
        bounty.lastName = lastName;
        bounty.living = living;
        bounty.bountyAmount = bountyAmount;
        bounty.type = type;
        res.send('Successfully updated bounty!');
    } else {
        res.status(404).send('Bounty not found!');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
