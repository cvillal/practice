const express = require('express');
const jobsArray = require('./models/skills.js');
// const staff = require('./models/skills.js');
const skills = require('./models/skills.js');
const app = express();

app.get('/homepage', (request, response)=>{
	response.send("Welcome to our Company!");
})

app.get('/jobs', (request, response)=>{
	response.send(`${jobsArray[0].jobtype}, ${jobsArray[1].jobtype}, ${jobsArray[2].jobtype}`);
})
// app.get('/staff', (request, response)=>{
// 	response.send(`${staff[0].name}, ${staff[1].name},${staff[2].name}, ${staff[3].name}`);
// })


app.listen(3000, ()=> {
	console.log('listening...');
});
