/**
 * Product Routes
 * ==============
 * This file contains the product routes for the application.
 * The product routes are used to handle product creation,
 * retrieval, and deletion.
 * GET     /products
 * POST    /products
 * GET     /products/:productId
 * PUT     /products/:productId
 * DELETE  /products/:productId
 */

const express = require('express');
const productsCtr = require('../../controllers/products');
const router = express.Router();

router.param('productId', productsCtr.preloadTargetProduct);

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', productsCtr.getProducts);

// @route POST api/products
// @desc Create a product
// @access Public
router.post('/', productsCtr.createProduct);

// * TODO: delete before the application goes live
// @route   DELETE api/products /
// @desc    Delete all products
// @access  Public
router.delete('/', productsCtr.deleteProducts);

// @route   GET api/products/:productId
// @desc    Get a product by id
// @access  Public
router.get('/:productId', productsCtr.getProduct);

// @route   PUT api/products/:productId
// @desc    Update a product by id
// @access  Public
router.put('/:productId', productsCtr.updateProduct);

// @route   DELETE api/products/:productId
// @desc    Delete a product by id
// @access  Public
router.delete('/:productId', productsCtr.deleteProduct);

module.exports = router;
