const express = require('express');
const mongoose = require('mongoose');
const Todos = require('./models/todos.js')
const cors = require('cors')
const app = express();


//use
app.use(express.json())
app.use(cors())


//ROUTES
//create route
app.post('/todos', (req, res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo)
    })
})

//read (index) route
app.get('/todos', (req, res) => {
    Todos.find({}, (err, foundTodos) => {
        res.json(foundTodos)
    })
})

//delete route
app.delete('/todos/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (err, deleteTodo) => {
        res.json(deleteTodo);
    })
})

//update route
app.put('/todos/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo) =>{
        res.json(updatedTodo)
    })
})










mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})

app.listen(3000, () => {
    console.log('listening...');
})