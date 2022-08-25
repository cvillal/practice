//REQUIREMENTS
const express = require('express');
const mongoose = require('mongoose');
const Animals = require('./models/animals.js')
const app = express();



//USE
app.use(express.json())

//ROUTES

//Create Route - creates new animal card
app.post('/animals', (req, res) => {
    Animals.create(req.body, (err, createdAnimal) => {
        res.json(createdAnimal)
    })
})

//Read/Index Route - shows all animals for adoption
app.get('/animals', (req, res) => {
    Animals.find({}, (err, foundAnimals) => {
        res.json(foundAnimals)
    })
})


//Delete Route - deletes animals that have been adopted
app.delete('/animals/:id', (req, res) => {
    Animals.findByIdAndRemove(req.params.id, (err, deleteAnimal) => {
        res.json(deleteAnimal);
    })
})

//Update Route - ubdates animals info submits updates made through edit on animal info
app.put('/animals/:id', (req, res) => {
    Animals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal) => {
        res.json(updatedAnimal)
    })
})


mongoose.connect('mongodb://localhost:27017/shelter')
mongoose.connection.once('open', () => {
    console.log('conected to mongod...');
})

app.listen(3000, () => {
    console.log('listening...');
})