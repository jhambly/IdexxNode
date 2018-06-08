


//events
//https://nodejs.org/api/events.html

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on("printToConsole",(args)=>{
//     console.log("callback called", args);
// });

// let pet = {id:1,name:"rex"};
// emitter.emit("printToConsole",pet);

//const fs = require('fs');

// synchronous - no callback function

// var files = fs.readdirSync('c:\\');
// console.log(files);
// console.log("done...");

// asynchronous - callback function
// var filesAsync = fs.readdir('c:\\', function (err, filesAsync){
//     if(err) console.log(`Error ${err}`); //ecma6
//     else{
//         console.log(filesAsync);
//     }
// })

// console.log("done...");
