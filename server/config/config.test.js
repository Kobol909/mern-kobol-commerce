/**
 *  Configuration tests
 *  ===================
 *
 */
const _ = require('lodash');
const defaultConfig = require('./config.default');
const constants = require('../core/constants');

/**
 * Configuration for test environment
 *
 */
let testConfig = {
  auth: {
    googleSignIn: false,
    resetPassword: true, // If true, be able to reset password via email
    verifyEmail: true // If true, require email verification when signing up
  },
  morgan: {
    format: 'dev', // TODO possible values: combined, common, dev, short, tiny
    format: constants.MORGAN_FORMAT_DEV // TODO possible values: combined, common, dev, short, tiny
  },
  mongo: {
    testUri: `mongodb://localhost:27017/${defaultConfig.app.name}_test`
  },
  oauth: {},
  openId: {},
  rateLimit: {
    enabled: false
  },
  seed: {
    logging: false,
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
        role: constants.ROLE_ROOT,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-01',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'anotherroot',
        email: 'another-root@kobol.app',
        password: 'password',
        firstName: 'AnotherRoot',
        lastName: 'Account',
        role: constants.ROLE_ROOT,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-01',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'admin',
        email: 'admin@kobol.app',
        password: 'password',
        firstName: 'Admin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-02',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'anotheradmin',
        email: 'another-admin@kobol.app',
        password: 'password',
        firstName: 'AnotherAdmin',
        lastName: 'Account',
        role: constants.ROLE_ADMIN,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-02',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'specialuser',
        email: 'special-user@kobol.app',
        password: 'password',
        firstName: 'SpecialUser',
        lastName: 'Account',
        role: constants.ROLE_USER,
        status: constants.STATUS_ACTIVE,
        permissions: {
          userModify: true,
          userRead: true
        },
        provider: {
          google: {
            userId: 'google-user-id-03',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'anotherspecialuser',
        email: 'another-special-user@kobol.app',
        password: 'password',
        firstName: 'AnotherSpecialUser',
        lastName: 'Account',
        role: constants.ROLE_USER,
        status: constants.STATUS_ACTIVE,
        permissions: {
          userModify: true,
          userRead: true
        },
        provider: {
          google: {
            userId: 'google-user-id-03',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'user',
        email: 'tester.hmt4@gmail.com',
        password: 'password',
        firstName: 'User',
        lastName: 'Account',
        role: constants.ROLE_USER,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-03',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      },
      {
        username: 'anotheruser',
        email: 'another-user@kobol.app',
        password: 'password',
        firstName: 'AnotherUser',
        lastName: 'Account',
        role: constants.ROLE_USER,
        status: constants.STATUS_ACTIVE,
        provider: {
          google: {
            userId: 'google-user-id-03',
            picture: 'google-avatar-url',
            accessToken: 'google-access-token',
            refreshToken: 'google-refresh-token'
          }
        }
      }
    ]
  },
  trustProxy: {
    enabled: false,
    // see https://expressjs.com/en/guide/behind-proxies.html
    value: 0
  }
};

testConfig = _.merge({}, defaultConfig, testConfig);

module.exports = testConfig;
