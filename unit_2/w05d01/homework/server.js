const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./models/schema.js')
const budgetSeed = require('./models/budget.js')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

// app.get('/budget/seed', (req, res) =>{
//     Budget.create(budgetSeed, (err, data) => {
//      res.send(data)
//     if (err) console.log(err.message)
//     console.log('added provided budget data')
//     res.redirect('/budget')
// })
// })


app.get('/budget/:id', (req, res) => {
    Budget.findById(req.params.id, (err, chosenSection) =>{
        res.render(
            'show.ejs',
            {
                budget: chosenSection
            }
        )
    })
})

app.get('/budget', (req, res) =>{
    Budget.find({}, (err, allBudget) => {
        res.render(
            'index.ejs',
            {
                budget: allBudget
            }
        )
    })
})

app.get('/budget', (req, res) => {
    res.send('moneyyy');
})

app.listen(3000, () => {
    console.log('listening');
})

mongoose.connect('mongodb://localhost:27017/budget', () =>{
    console.log('The connection with mongod is established');
})
