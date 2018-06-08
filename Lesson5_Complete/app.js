//express server

var express = require('express');
var path = require('path');

var app = express();
app.use(express.json());
var tests = [

    {
      id:1,
      test: "ALP",
      result: "163",
      range: "5.0 - 160.0",
      flag: "high",
      graph: "[___|__________|_x_]",
      date: "6/7/2018"
    },
    {
      id:2,
      test: "ALt",
      result: "61",
      range: "18.0 - 121.0",
      flag: "inrange",
      graph: "[___|___x______|___]",
      date: "6/7/2018"
    },
    {
      id:3,
      test: "AST",
      result: "27",
      range: "16.0 - 55.0",
      flag: "inrange",
      graph: "[___|__x_______|___]",
      date: "6/7/2018"
    },
    {
      id:4,
      test: "CREATINE",
      result: "104",
      range: "10.0 - 200.0",
      flag: "inrange",
      graph: "[___|____x_____|___]",
      date: "6/7/2018"
    },
    {
      id:5,
      test: "GGT",
      result: "8",
      range: "0.0 - 13.0",
      flag: "inrange",
      graph: "[___|_____x____|___]",
      date: "6/7/2018"
    }
];

//expressjs.com
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

//get read in CRUD
app.get('/api/tests', (req,res) => {
    res.send(tests);
});

app.get('/api/tests/:id', (req,res) => {
    const test = tests.find(p=>p.id == req.params.id);
    if (!test) 
        res.status(404).send(`Test id: ${req.params.id} not found`);
    else
        res.send(test);
});

app.post('/api/tests', (req,res) => {
    const test = {
        id: tests.length + 1,
        name: req.body.name
    };
    tests.push(test);
    res.send(test);

});


const port = 3000;

app.listen(3000, ()=>{
    console.log(`Server listening localhost:${port} `);
});