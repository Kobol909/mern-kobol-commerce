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
    name: 'kobol-sounds', // TODO Lowercase, URL compatible name
    title: 'kobol-sounds' // TODO Human friendly name
  },
  auth: {
    googleSignIn: true,
    oauth2SignIn: false,
    resetPassword: true, // If true, be able to reset password via email
    verifyEmail: true // If true, require email verification when signing up
  },
  cors: {
    enabled: false
  },
  email: {
    from: 'no-reply@kobol-sounds.app', // TODO
    to: '',
    signature: 'Kobol' // TODO
  },
  jwt: {
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60 // seconds
  },
  morgan: {
    enabled: true,
    format: constants.MORGAN_FORMAT_COMBINED // TODO - possible values: combined, common, dev, short, tiny
  },
  paths: {
    root: fspath.normalize(`${__dirname}/..`)
  },
  https: {},
  oauth2: {},
  openId: {},
  rateLimit: {
    enabled: true
  },
  seed: {
    logging: true,
    users: [
      {
        username: 'root',
        email: 'root@tdev.app',
        password: 'w-$nJee?4R#NsuAz',
        firstName: 'Root',
        lastName: 'Account',
        role: constants.ROLE_ROOT
      },
      {
        username: 'admin',
        email: 'admin@tdev.app',
        password: 'bqf]7gk%YY#?GA5-',
        firstName: 'Admin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN
      }
    ]
  },
  trustProxy: {
    enabled: true,
    // see https://expressjs.com/en/guide/behind-proxies.html
    value: 1
  }
};

prodConfig = _.merge({}, defaultConfig, prodConfig);

module.exports = prodConfig;
