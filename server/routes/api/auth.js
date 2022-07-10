/**
 *  Authentication Routes
 *  =====================
 *
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const cors = require('cors');

const config = require('../../config');
const authCtrl = require('../../controllers/auth');

const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategy');
const createRateLimiterMiddleware = require('../../middleware/createRateLimiterMiddleware');

const { authCheck } = require('../../middleware/authCheckMiddleware');

const jwtAuthenticate = createAuthenticationStrategy('jwt');
const localAuthenticate = createAuthenticationStrategy('local');

/**
 * Block after 20 failed requests in 15 mins
 */
const failedRateLimiter = createRateLimiterMiddleware({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true
});

/**
 * Block after 5 successful requests in 15 mins
 */
const successfulRateLimiter = createRateLimiterMiddleware({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipFailedRequests: true
});

// @route   GET /api/auth/google
// @desc    Sign in with Google
// @access  Public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// @route   GET /api/auth/google/redirect
// @desc    Google auth redirect (callback)
// @access  Public
router.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: 'https://localhost:3000/auth',
    successRedirect: 'https://localhost:3000/dashboard'
  })
);

// @route   POST /api/auth/sign-in-with-google
// @desc    Sign up with Google
// @access  Public
router.post('/sign-in-with-google', authCtrl.signInWithGoogle);

// @route   POST api/auth/invalidate-all-jwt-tokens
// @desc    Invalidate all JWT tokens
// @access  Private
router.post(
  '/invalidate-all-jwt-tokens',
  failedRateLimiter,
  jwtAuthenticate,
  authCtrl.invalidateAllJwtTokens
);

// @route   POST api/auth/reset-password/:token
// @desc    Reset password with token
// @access  Public
router.post('/reset-password/:token', failedRateLimiter, authCtrl.resetPassword);

// @route   POST api/auth/send-token
// @desc    Send reset password token
// @access  Public
router.post('/send-token', successfulRateLimiter, authCtrl.sendToken);

// @route   POST api/auth/sign-in
// @desc    Sign in
// @access  Public
router.post(
  '/sign-in',
  failedRateLimiter,
  authCtrl.validateLocalSignInPayload,
  localAuthenticate,
  authCtrl.signIn
);

// @route   POST api/auth/sign-up
// @desc    Sign up
// @access  Public
router.post('/sign-up', successfulRateLimiter, authCtrl.signUp);

// @route   POST api/auth/verify-email/:token
// @desc    Verify email with token
// @access  Public
router.post('/verify-email/:token', failedRateLimiter, authCtrl.verifyEmail);

// @route   POST api/auth/verify-jwt-token
// @desc    Verify JWT token
// @access  Private
router.post('/verify-jwt-token', failedRateLimiter, jwtAuthenticate, authCtrl.verifyJwtToken);

module.exports = router;
