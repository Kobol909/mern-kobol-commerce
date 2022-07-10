/**
 *  Default configuration file for the server environment
 *  =====================================================
 *
 */
const fspath = require('path');
const constants = require('../core/constants');
require('dotenv').config();

/**
 * Default configuration
 */
let defaultConfig = {
  allowCreatorModify: {
    user: false // Model name in camel case
    // examplePost: true
  },
  app: {
    name: 'kobol-sounds', // Application name
    title: 'Kobol-sounds' // Application title
  },
  auth: {
    googleSignIn: true, // If true, enable OAuth2 sign in
    resetPassword: false, // If true, be able to reset password via email
    verifyEmail: false // If true, require email verification when signing up
  },
  compression: {
    enabled: false,
    options: null // See https://www.npmjs.com/package/compression
  },
  cors: {
    enabled: true,
    options: {
      origin: 'https://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
      optionsSuccessStatus: 200
    } // See https://www.npmjs.com/package/cors
  },
  email: {
    from: 'no-reply@kobol-sounds.app', // TODO
    to: '',
    signature: 'Kobol' // TODO
  },
  etag: {
    enabled: true
  },
  jwt: {
    secret: 'This will be overridden by environment variable JWT_SECRET',
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60 // in seconds
  },
  helmet: {
    enabled: true,
    options: {} // See https://www.npmjs.com/package/helmet
  },
  https: {
    enabled: true
  },
  morgan: {
    enabled: true,
    format: constants.MORGAN_FORMAT_DEV, // TODO - possible values: combined, common, dev, short, tiny
    options: null // See https://www.npmjs.com/package/morgan
  },
  mongo: {
    uri: 'This will be overridden by environment variable MONGO_URI',
    testUri: 'mongodb://localhost:27017/kobol-sounds_test'
  },
  oauth: {
    google: {
      clientID: 'This will be overridden by environment variable GOOGLE_CLIENT_ID',
      clientSecret: 'This will be overridden by environment variable GOOGLE_CLIENT_SECRET',
      callbackURL: 'This will be overridden by environment variable GOOGLE_CALLBACK_URL',
      authorizationURL: 'This will be overridden by environment variable GOOGLE_AUTHORIZATION_URL',
      tokenURL: 'This will be overridden by environment variable GOOGLE_TOKEN_URL',
      scope: 'This will be overridden by environment variable GOOGLE_SCOPE',
      pkce: 'This will be overridden by environment variable GOOGLE_PKCE',
      state: 'This will be overridden by environment variable GOOGLE_STATE'
    }
  },
  paths: {
    root: fspath.normalize(`${__dirname}/..`)
  },
  port: process.env.PORT || 8861,
  proxy: {
    enabled: false,
    options: {
      target: process.env.SERVER_PROXY_URL,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    },
    port: process.env.SERVER_PROXY_PORT
  },
  rateLimit: {
    enabled: false
  },
  seed: {
    logging: true,
    users: []
  },
  sendgrid: {
    apiKey: 'This will be overridden by environment variable SENDGRID_API_KEY'
  },
  server: {
    host: 'This will be overridden by environment variable SERVER_HOST',
    port: 'This will be overridden by environment variable SERVER_PORT',
    publicUrl: 'This will be overridden by environment variable SERVER_PUBLIC_URL'
  },
  session: {
    enabled: true,
    options: {
      secret: 'This will be overridden by environment variable SESSION_SECRET ',
      resave: false,
      saveUninitialized: false,
      cookie: {} // See https://www.npmjs.com/package/express-session
    },
    maxAge: 60 * 60 * 24 * 7 // in seconds
  },
  trustProxy: {
    enabled: false,
    // see https://expressjs.com/en/guide/behind-proxies.html
    value: 0
  }
};

module.exports = defaultConfig;
