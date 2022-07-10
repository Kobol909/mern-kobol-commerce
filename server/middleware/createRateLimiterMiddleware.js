/**
 * @function
 * Create a middleware to handle rate limiting requests
 *
 * @param {object} defaultOptions     An object containing default options to use
 * for the rate limiter
 *
 *
 * @param {object} rateLimitOptions   An object with the following properties:
 *
 * @param {number} .max           The maximum number of requests allowed
 * @param {number} .windowMs      The time window in milliseconds
 * @param {number} .statusCode    The status code to return when the rate limit is exceeded
 * @param {string} .message       The message to return when the rate limit is exceeded
 *
 */
const rateLimit = require('express-rate-limit');
const createError = require('http-errors');
const config = require('../config');

const defaultOptions = {
  max: 5,
  windowMs: 15 * 60 * 1000,
  statusCode: 429,
  message: 'Too many requests from this IP, please try again later.'
};

const createRateLimiterMiddleware = (rateLimitOptions) => {
  if (!config.rateLimit.enabled) {
    return (req, res, next) => {
      next();
    };
  }

  const options = { ...defaultOptions, ...rateLimitOptions };
  return rateLimit({
    ...options,
    handler: (req, res, next) => {
      throw createError(options.statusCode, options.message);
    }
  });
};

module.exports = createRateLimiterMiddleware;
