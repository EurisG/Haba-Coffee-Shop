const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/config.env`
});

console.log(process.env);

const app = require('./app');

// const coffeeRoutes = require('./routes/coffeeRoutes')
const cluster0 = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() => {
    console.log("DATABASE IS UP AND RUNNING..");
});







// PORT LISTENER 
let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...` )
});




