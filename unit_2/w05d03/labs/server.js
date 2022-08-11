const express = require('express');
const mongoose = require('mongoose');
const Backpack = require('./models/backpackSchema.js')
const backpackSeed = require('./models/schema.js')
const methodOverride = require('method-override')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(methodOverride('_method'))


// app.get('/backpack/seed', (req, res)=>{
//     Backpack.create(backpackSeed, (err, data) => {
//         res.redirect('/backpack')
//     })
// })  


app.delete("/backpack/:id", (req, res) => {
    Backpack.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/backpack')
    })
})


app.put('/backpack/:id', (req, res) =>{
    Backpack.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateBackpack) => {
        res.redirect('/backpack');
    })
})

app.get('/backpack/:id/edit', (req, res)=>{
    Backpack.findById(req.params.id, (err, foundBackpack) => {
        res.render(
            'edit.ejs',
            {
                backpack: foundBackpack
            }
        )
    })
})



app.get('/backpack/new', (req, res)=>{
    res.render('new.ejs');
})

app.post('/backpack', (req, res)=>{
    Backpack.create(req.body, (err, createdBackpack)=>{
        res.redirect('/backpack')
    })
})


app.get('/backpack/:id', (req, res) =>{
    Backpack.findById(req.params.id, (err, foundBackpack)=> {
        res.render(
            'show.ejs',
            {
                backpack: foundBackpack
            }
        )
    })
})

app.get('/backpack', (req, res)=>{
    Backpack.find({}, (err, allContents)=>{
        res.render(
            'index.ejs',
            {
                backpack: allContents
            })
    })
})

app.listen(3000, () => {
    console.log('listening');
})

mongoose.connect('mongodb://localhost:27017/backpack', () =>{
    console.log('The connection with mongod is established');
})
