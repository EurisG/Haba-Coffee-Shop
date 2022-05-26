const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productPrice: {
        type: String,
    },
    productIngridients: {
        type: String,
    }
});

const Coffee = mongoose.model("Coffee", productSchema);

module.exports = Coffee;