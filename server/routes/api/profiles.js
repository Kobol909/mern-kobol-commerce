/**
 *  Profiles API
 *  ============
 *  GET /api/profiles
 *  POST /api/profiles
 *  PUT /api/profiles/:profileId
 *  GET /api/profiles/:profileId
 *  DELETE /api/profiles/:profileId
 */
const express = require('express');
const profilesCtrl = require('../../controllers/profiles');
const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategy');

const router = express.Router();

const jwtAuthenticate = createAuthenticationStrategy('jwt');

// @route   GET /api/profiles/
// @desc    Get all profiles
// @access  Public
router.get('/', jwtAuthenticate, profilesCtrl.getProfile);

//@route    PUT /api/profiles/
//@desc     Update profile
//@access   Private
router.put('/', jwtAuthenticate, profilesCtrl.updateProfile);

// @route   PUT /api/profiles/password
// @desc    Update password
// @access  Private
router.put('/password', jwtAuthenticate, profilesCtrl.updatePassword);

// @route   GET /api/profiles/:userId
// @desc    Get profile by userId
// @access  Private
router.get('/:userId', profilesCtrl.getPublicProfile);

module.exports = router;
