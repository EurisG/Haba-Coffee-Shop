const express = require('express');

const coffeeRouter = require('./routes/coffeeRoutes');


const app = express();
app.use(express.json());
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// app.use(express.json());


app.use("/coffee", coffeeRouter);



module.exports = app;