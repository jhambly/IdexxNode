//express server

var express = require('express');
var app = express();
app.use(express.json());
const pets = [

    {id:1, name:'Rex'},
    {id:2, name:'Raven'},
    {id:3, name:'Ruby'},
    {id:4, name:'Geek'},
    {id:5, name:'Zoe'}

];

//expressjs.com
app.get('/', (req,res) => {
    res.send("Landing page")
});

//get read in CRUD
app.get('/api/pets', (req,res) => {
    res.send(pets);
});

app.get('/api/pets/:id', (req,res) => {
    const pet = pets.find(p=>p.id == req.params.id);
    if (!pet) 
        res.status(404).send(`Pet id: ${req.params.id} not found`);
    else
        res.send(pet);
});

app.post('/api/pets', (req,res) => {
    const pet = {
        id: pets.length + 1,
        name: req.body.name
    };
    pets.push(pet);
    res.send(pet);

});


const port = 3000;

app.listen(3000, ()=>{
    console.log(`Server listening on port ${port} `);
});