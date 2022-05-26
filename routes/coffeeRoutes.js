const express = require('express');

const coffeeController = require('../controllers/coffeeControllers')

const router = express.Router();

router.route('/').get(coffeeController.getAllCoffee).post(coffeeController.createProduct);
router.route('/:id').get(coffeeController).patch(coffeeController).delete(coffeeController);

module.exports = router;