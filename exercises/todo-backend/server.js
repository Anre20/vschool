const express = require('express');
const app = express();
const port = 8000;
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

let todos = [];

app.get('/todo',(req, res) => {
    res.json(todos);
});

app.post('/todo',(req, res) => {
    const { name, description, imageUrl, completed } = req.body;


const newTodo = {
    id: uuidv4(),
    name,
    description,
    imageUrl,
    completed
};

todos.push(newTodo);

// res.status(201).json(newtodo);

res.send(`Successfully added ${newTodo.name} to the database!`)

});

app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    if (todos.length < initialLength) {
        res.send('Successfully deleted todo!');
    } else {
        res.status(404).send('To-do not found!');
    }
})

app.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, imageUrl, completed } = req.body;
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.name = name;
        todo.description = description;
        todo.imageUrl = imageUrl;
        todo.completed = completed;
        res.send('Successfully updated todo!');
    } else {
        res.status(404).send('todo not found!');
    }});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
