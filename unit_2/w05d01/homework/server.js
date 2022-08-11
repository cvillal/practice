<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./models/schema.js')
const budgetSeed = require('./models/budget.js')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

// app.get('/budget/seed', (req, res) =>{
//     Budget.create(budgetSeed, (err, data) => {})
//     res.redirect('/budget')
// })

app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

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
=======
// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Configuration
const port = 3000
app.use(express.urlencoded({extended:true}))

// Static
app.use(express.static('public'))

// Data
const Budget = require('./models/budget.js')

// INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {ledger: Budget})
})

// SHOW
app.get('/budgets/:index', (req,res)=> {
    res.render('show.ejs', {ledger: Budget[req.params.index]})
})

// Listen
app.listen(port, () => {
    console.log("ready to budget on port" , 300)
})
mongoose.connect('mongodb://localhost:27017/NAME_OF_YOUR_DATABASE', () => {
  console.log('The connection with mongod is established')
})
>>>>>>> 26baaa71b51cdac90152882b41269af7d312fee7
