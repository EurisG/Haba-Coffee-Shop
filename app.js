const express = require('express');
const app = express();

const productRouter = require('./routes/coffeeRoutes');

app.use(express.json());

// middleware handling our routes 
app.use('/home', productRouter);

module.exports = app;