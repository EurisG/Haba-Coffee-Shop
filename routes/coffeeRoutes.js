const express = require('express');

const coffeeController = require('./../controllers/coffeeControllers')

const router = express.Router();


// created routes for every controller 
router.route('/').get(coffeeController.getAllCoffee).post(coffeeController.createProduct);
router.route('/:id').get(coffeeController.singleProduct).patch(coffeeController.updateProduct).delete(coffeeController.deleteProduct);

module.exports = router;