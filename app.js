const express = require('express');
const app = express();

const coffeeRouter = require('./routes/coffeeRoutes');

app.use(express.json());


app.use('/coffee', coffeeRouter);



module.exports = app;