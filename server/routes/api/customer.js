/**
 *  Customer Routes
 *  ===============
 */
const express = require('express');
const usersCtr = require('../../controllers/user');
const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategy');
const createUserAuthorizationMiddleware = require('../../middleware/createUserAuthorizationMiddleware');
const router = express.Router();
const jwtAuthenticate = createAuthenticationStrategy('jwt');
const canReadUser = createUserAuthorizationMiddleware('read');
const canModifyUser = createUserAuthorizationMiddleware('modify');

router.use(jwtAuthenticate);

// Preload customer object on routes with ':customerId'
router.param('customerId', usersCtr.preloadTargetUser);

// @route   GET /api/customer/
// @desc    Get all customers
// @access  Public
router.get('/', canReadUser, usersCtr.getUsers);

// @route   GET /api/customer/:customerId
// @desc    Get customer by id
// @access  Private
router.get('/:customerId', canReadUser, usersCtr.getUser);

// @route   PUT /api/customer/:customerId
// @desc    Update customer by id
// @access  Private
router.put('/:customerId', canModifyUser, usersCtr.updateUser);

// @route   DELETE /api/customer/:customerId
// @desc    Delete customer by id
// @access  Private
router.delete('/:customerId', canModifyUser, usersCtr.deleteUser);

module.exports = router;
