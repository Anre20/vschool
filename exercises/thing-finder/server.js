const express = require('express');
const app = express();
const port = 9700;


const inventoryItems = [
    { name: "banana", type: "food", price: 200 },
    { name: "pants", type: "clothing", price: 2500 },
    { name: "basket ball", type: "toy", price: 1000 },
    { name: "rockem sockem robots", type: "toy", price: 1500 },
    { name: "shirt", type: "clothing", price: 800 },
    { name: "soup", type: "food", price: 300 },
    { name: "flour", type: "food", price: 100 }
];

app.use(express.json())

app.use('/inventory', (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()

})

app.use('/inventory', (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})

app.get('/inventory', (req, res) => {
    const { type } = req.query;

    if (type) {
        const filteredItems = inventoryItems.filter(item => item.type === type);
        res.json(filteredItems);
    } else {
        res.json(inventoryItems);
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
