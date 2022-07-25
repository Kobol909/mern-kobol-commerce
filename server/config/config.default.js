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
 *
 */
let defaultConfig = {
  allowCreatOrModify: {
    /**
     * @type {Boolean}
     * @default false
     * @description
     * If true, allow creating or modifying resources
     * Database model names in camelCase
     */
    attribute: false,
    category: false,
    comment: false,
    customer: false,
    order: false,
    product: false,
    review: false,
    tag: false,
    user: false
  },
  app: {
    // Application name (should be URL friendly)
    name: 'kobol-sounds',
    // Application title (should be human friendly)
    title: 'Kobol Sounds'
  },
  auth: {
    // If true, enable OAuth2 sign in via Google (Google sign in)
    googleSignIn: true,
    // If true, activate reset password via email
    resetPassword: false,
    // If true, require email verification when signing up
    verifyEmail: false
  },
  compression: {
    enabled: false,
    options: null
    // See https://www.npmjs.com/package/compression
  },
  cors: {
    // If true, enable CORS
    enabled: true,
    options: {
      origin: 'https://localhost:3000',
      methods: 'DELETE,GET,PATCH,POST,PUT',
      credentials: true,
      allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
      optionsSuccessStatus: 200
    }
    // See https://www.npmjs.com/package/cors
  },
  email: {
    from: 'no-reply@kobol-sounds.app', // TODO: Change to real email address
    to: '',
    signature: 'Kobol' // TODO: Change to real signature
  },
  etag: {
    enabled: true
    // See https://www.npmjs.com/package/etag
  },
  jwt: {
    // Algorithm used to sign the token
    secret: 'This will be overridden by environment variable JWT_SECRET',
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60 // in seconds
  },
  helmet: {
    enabled: true,
    options: {}
    // See https://www.npmjs.com/package/helmet
  },
  https: {
    // If true, enable HTTPS - Requires SSL certificate
    enabled: true
  },
  morgan: {
    enabled: true,
    format: constants.MORGAN_FORMAT_DEV, // TODO: possible values: combined, common, dev, short, tiny
    options: null
    // See https://www.npmjs.com/package/morgan
  },
  mongo: {
    // If true, enable MongoDB
    uri: 'This will be overridden by environment variable MONGO_URI',
    testUri: 'mongodb://localhost:27017/kobol-sounds_test'
  },
  oauth: {
    // Google OAuth2 client values
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
    // Path to the public directory
    root: fspath.normalize(`${__dirname}/..`)
  },
  port: process.env.PORT || 8861,
  proxy: {
    // If true, enable proxy
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
    // See https://www.npmjs.com/package/express-rate-limit
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
    users: []
  },
  sendgrid: {
    // TODO: Replace with Mailgun or another email service
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
      saveUninitialized: true,
      cookie: {}
    },
    maxAge: 60 * 60 * 24 * 7 // in seconds
    // See https://www.npmjs.com/package/express-session
  },
  trustProxy: {
    enabled: false,
    value: 0
    // see https://expressjs.com/en/guide/behind-proxies.html
  }
};

module.exports = defaultConfig;
