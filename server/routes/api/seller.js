/**
 *  Customer Routes
 *  ===============
 */
const express = require('express');
const sellersCtr = require('../../controllers/seller');
const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategySeller');
const createSellerAuthorizationMiddleware = require('../../middleware/createSellerAuthorizationMiddleware');
const createRateLimiterMiddleware = require('../../middleware/createRateLimiterMiddleware');
const router = express.Router();
const jwtAuthenticate = createAuthenticationStrategy('jwt');
const canReadSeller = createSellerAuthorizationMiddleware('read');
const canModifySeller = createSellerAuthorizationMiddleware('modify');

router.use(jwtAuthenticate);

// Preload seller object on routes with ':sellerId'
router.param('sellerId', sellersCtr.preloadTargetSeller);

// @route   GET /api/seller/seller/
// @desc    Get all sellers
// @access  Public
router.get('/', canReadSeller, sellersCtr.getSellers);

// @route   GET /api/seller/:sellerId
// @desc    Get seller by id
// @access  Private
router.get('/:sellerId', canReadSeller, sellersCtr.getSeller);

// @route   PUT /api/seller/:sellerId
// @desc    Update seller by id
// @access  Private
router.put('/:sellerId', canModifySeller, sellersCtr.updateSeller);

// @route   DELETE /api/seller/:sellerId
// @desc    Delete seller by id
// @access  Private
router.delete('/:sellerId', canModifySeller, sellersCtr.deleteSeller);

module.exports = router;
