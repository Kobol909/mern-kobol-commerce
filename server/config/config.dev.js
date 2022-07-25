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
 *
 */
let devConfig = {
  app: {
    // Application name (should be URL friendly)
    name: 'mern-kobol-commerce',
    // Application title (should be human friendly)
    title: 'MERN Kobol eCommerce'
  },
  auth: {
    // If true, enable OAuth2 sign in via Google (Google sign in)
    googleSignIn: true,
    // If true, activate reset password via email
    resetPassword: false,
    // If true, require email verification when signing up
    verifyEmail: false
  },
  etag: {
    enabled: false
    // See https://www.npmjs.com/package/etag
  },
  morgan: {
    enabled: true,
    format: constants.MORGAN_FORMAT_DEV, // TODO: possible values: combined, common, dev, short, tiny
    options: null
    // See https://www.npmjs.com/package/morgan
  },
  seed: {
    logging: true,
    attributes: [],
    categories: [],
    comments: [],
    customers: [],
    orders: [],
    products: [],
    reviews: [],
    tags: [],
    users: [
      {
        username: 'root',
        email: 'root@kobol.app',
        password: 'password',
        firstName: 'Root',
        lastName: 'Account',
        role: constants.ROLE_ROOT
      },
      {
        username: 'admin',
        email: 'admin@kobol.app',
        password: 'password',
        firstName: 'Admin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN
      },
      {
        username: 'user',
        email: 'user@kobol.app',
        password: 'password',
        firstName: 'User',
        lastName: 'Account',
        role: constants.ROLE_USER
      }
    ]
  },
  session: {
    enabled: true,
    options: {
      secret: 'This will be overridden by environment variable SESSION_SECRET ',
      resave: false,
      saveUninitialized: true,
      cookie: {}
    },
    maxAge: 60 * 60 * 24 * 7 // in seconds
    // See https://www.npmjs.com/package/express-session
  }
};

devConfig = _.merge({}, defaultConfig, devConfig);

module.exports = devConfig;
