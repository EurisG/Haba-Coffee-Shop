const express = require('express');

const productController = require('../controllers/coffeeControllers');

const router = express.Router();

router.route('/').get(productController.getAllProduct).post(productController.createProduct);
router.route("/:id").get(productController.getSingleProduct).patch(productController.updateProduct).delete(productController.deleteProduct);

module.exports = router;