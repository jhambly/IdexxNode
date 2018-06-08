//express server

var express = require('express');
var app = express();

const pets = ["Rex","Ruby","Raven","Geek","Zoe"];

//expressjs.com
app.get('/', (req,res) => {
    res.send("Landing page")
});

app.get('/api/pets', (req,res) => {
    res.send(pets);
});

app.get('/api/pets/:id', (req,res) => {

    res.send(pets[req.params.id]);
});

const port = 3000;

app.listen(3000, ()=>{
    console.log(`Server listening on port ${port} `);
});