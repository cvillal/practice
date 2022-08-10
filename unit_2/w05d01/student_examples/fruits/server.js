const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Fruit = require('./models/fruits.js')
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

app.put('/fruits/:id', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat =false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=> {
        res.send(updatedModel);
    })
    
})

app.get('/fruits/:id/edit', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render(
            'edit.ejs',
            {
                fruit: foundFruit
            }
        )
    })
    
})

app.delete('/fruits/:asdf', (req, res) => {
   Fruit.findByIdAndRemove(req.params.asdf, (error, data) =>{
    res.redirect('/fruits'); 
    })
})

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

app.get('/fruits/:id', (req, res) =>{
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render(
            'show.ejs',
            {
                fruit: foundFruit 
            }
            )
    })
})

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }else{ 
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) =>{
        res.redirect('/fruits')
    })
    // res.send(req.body);
});

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render(
            'index.ejs',
            {
                fruits: allFruits
            })
    })
    
})

app.listen(3000, () => {
    console.log('listening');
})

mongoose.connect('mongodb://localhost:27017/basiccrud', () =>{
    console.log('The connection with mongod is established');
})

