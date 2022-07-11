/**
 *  Configuration file for the server environment (dev)
 *  ===================================================
 *
 */
const _ = require('lodash');
const defaultConfig = require('./config.default');
const constants = require('../core/constants');

require('dotenv').config();

/**
 * Configuration for development environment
 */
let devConfig = {
  app: {
    name: 'mern-kobol-commerce', // Application name
    title: 'mern-kobol-commerce' // Application title
  },
  auth: {
    googleSignIn: true,
    resetPassword: false, // If true, be able to reset password via email
    verifyEmail: false // If true, require email verification when signing up
  },
  etag: {
    enabled: false
  },
  morgan: {
    format: constants.MORGAN_FORMAT_DEV // TODO possible values: combined, common, dev, short, tiny
  },
  seed: {
    logging: true,
    users: [
      {
        username: 'root',
        email: 'root@tdev.app',
        password: 'password',
        firstName: 'Root',
        lastName: 'Account',
        role: constants.ROLE_ROOT
      },
      {
        username: 'admin',
        email: 'admin@tdev.app',
        password: 'password',
        firstName: 'Admin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN
      },
      {
        username: 'user',
        email: 'user@tdev.app',
        password: 'password',
        firstName: 'User',
        lastName: 'Account',
        role: constants.ROLE_USER
      }
    ]
  },
  session: {
    enabled: true,
    secret: 'This will be overridden by environment variable SESSION_SECRET',
    expiresIn: 60 * 60 * 24 * 7 // in seconds
  }
};

devConfig = _.merge({}, defaultConfig, devConfig);

module.exports = devConfig;
