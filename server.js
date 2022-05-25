// IMPORT MONGOOSE TO CONNECT TO DATABASE 
const mongoose = require('mongoose');

// IMPORT DOTENV IN ORDER TO CONNECT TO OUR DATABASE
const dotenv = require('dotenv');


// use dotenv to connect to our config file  
dotenv.config({
    path: "./config.env"
});

console.log(process.env);

// IMPORT EPRESS APP 
const app = require('./app')















// PORT LISTENER 
let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...` )
});




