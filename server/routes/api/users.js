/**
 *  User Routes
 *  ===========
 *  These routes are for handling user account related requests.
 *
 */
const express = require('express');
const usersCtr = require('../../controllers/users');
const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategy');
const createUserAuthorizationMiddleware = require('../../middleware/createUserAuthorizationMiddleware');
const router = express.Router();
const jwtAuthenticate = createAuthenticationStrategy('jwt');
const canReadUser = createUserAuthorizationMiddleware('read');
const canModifyUser = createUserAuthorizationMiddleware('modify');
const passport = require('passport');

router.use(jwtAuthenticate);

// Preload user object on routes with ':userId'
router.param('userId', usersCtr.preloadTargetUser);

// @route   GET /api/user/
// @desc    Get all users
// @access  Public
// router.get('/', canReadUser, usersCtr.getUsers);
router.get('/', usersCtr.getUsers);

// @route   GET /api/user/:userId
// @desc    Get user by id
// @access  Private
router.get('/:userId', canReadUser, usersCtr.getUser);

// @route   PUT /api/user/:userId
// @desc    Update user by id
// @access  Private
router.put('/:userId', canModifyUser, usersCtr.updateUser);

// @route   DELETE /api/user/:userId
// @desc    Delete user by id
// @access  Private
router.delete('/:userId', canModifyUser, usersCtr.deleteUser);

module.exports = router;
