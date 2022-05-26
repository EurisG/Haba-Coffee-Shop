// IMPORT EPRESS APP 
const express = require('express');



// IMPORT MONGOOSE TO CONNECT TO DATABASE 
const mongoose = require('mongoose');

// IMPORT DOTENV IN ORDER TO CONNECT TO OUR DATABASE
const dotenv = require('dotenv');


// use dotenv to connect to our config file  
dotenv.config({
    path: "./config.env"
});

const app = require('./app');

console.log(process.env);




// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());
// app.use(express.urlencoded({extended: false}));




// PORT LISTENER 
let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...` )
});




