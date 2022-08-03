const express = require('express');
const app = express();

app.get('/Homer', (request, response)=>{
    response.send("homerworks");
})

app.get('/Marge', (request, response)=>{
    response.send("margeworks");
})

app.get('/Bart', (request, response)=>{
    response.send("bartworks");
})

app.get('/Lisa', (request, response)=>{
    response.send("lisaworks");
})

app.get('/Maggie', (request, response)=>{
    response.send("maggieworks");
})

app.get('/Snowball_II', (request, response)=>{
    response.send("snowball2works");
})

app.get('/Santas-Little-Helper', (request, response)=>{
    response.send("santaslilhelperworks");
})



app.listen(3000, ()=>{
    console.log('listening...');
})