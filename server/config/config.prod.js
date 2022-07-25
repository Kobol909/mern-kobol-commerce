/**
 *  Configuration file for the server environment (prod)
 *  ====================================================
 *
 */
const fspath = require('path');
const _ = require('lodash');
const defaultConfig = require('./config.default');
const constants = require('../core/constants');

/**
 * Configuration for Production environment
 */
let prodConfig = {
  app: {
    // Application name (should be URL friendly)
    name: 'mern-kobol-commerce',
    // Application title (should be human friendly)
    title: 'MERN Kobol eCommerce'
  },
  auth: {
    // If true, enable OAuth2 sign in via Google (Google sign in)
    googleSignIn: true,
    // If true, activate OAuth2 sign in via Passport
    oauth2SignIn: false,
    // If true, activate reset password via email
    resetPassword: true,
    // If true, require email verification when signing up
    verifyEmail: true
  },
  cors: {
    enabled: false
  },
  email: {
    from: 'no-reply@kobol-sounds.app', // TODO: Change to real email address
    to: '',
    signature: 'Kobol' // TODO: Change to real signature
  },
  jwt: {
    // Algorithm used to sign the token
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60 // in seconds
  },
  morgan: {
    enabled: true,
    format: constants.MORGAN_FORMAT_COMBINED, // TODO - possible values: combined, common, dev, short, tiny
    options: null
    // See https://www.npmjs.com/package/morgan
  },
  paths: {
    // Path to the public directory
    root: fspath.normalize(`${__dirname}/..`)
  },
  https: {},
  oauth: {},
  openId: {},
  rateLimit: {
    enabled: true
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
        password: 'w-$nJee?4R#NsuAz',
        firstName: 'Root',
        lastName: 'Account',
        role: constants.ROLE_ROOT
      },
      {
        username: 'admin',
        email: 'admin@kobol.app',
        password: 'bqf]7gk%YY#?GA5-',
        firstName: 'Admin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN
      }
    ]
  },
  trustProxy: {
    enabled: true,
    value: 1
    // see https://expressjs.com/en/guide/behind-proxies.html
  }
};

prodConfig = _.merge({}, defaultConfig, prodConfig);

module.exports = prodConfig;
