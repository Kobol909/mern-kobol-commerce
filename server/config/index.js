/**
 *  Validation schema for the server environment variables
 *  ======================================================
 *
 */
const fspath = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');
const Joi = require('joi');
const chalk = require('chalk');
const constants = require('../core/constants');

dotenv.config({ path: fspath.resolve(__dirname, '../../.env') });

/**
 * Joi schema for validating environment variables
 */
const envVarsSchema = Joi.object({
  ENV_DEV: Joi.boolean(),
  ENV_PROD: Joi.boolean(),
  ENV_TEST: Joi.boolean(),

  ERROR_MESSAGE_CURRENT_PASSWORD: Joi.string(),
  ERROR_MESSAGE_EMAIL: Joi.string(),
  ERROR_MESSAGE_PASSWORD: Joi.string(),
  ERROR_MESSAGE_USERNAME: Joi.string(),

  GOOGLE_AUTHORIZATION_URL: Joi.string(),
  GOOGLE_CALLBACK_URL: Joi.string(),
  GOOGLE_CLIENT_ID: Joi.string(),
  GOOGLE_CLIENT_SECRET: Joi.string(),
  GOOGLE_PKCE: Joi.boolean(),
  GOOGLE_SCOPE: Joi.string(),
  GOOGLE_STATE: Joi.string(),
  GOOGLE_TOKEN_URL: Joi.string(),

  MORGAN_FORMAT_COMBINED: Joi.string(),
  MORGAN_FORMAT_COMMON: Joi.string(),
  MORGAN_FORMAT_DEV: Joi.string(),
  MORGAN_FORMAT_SHORT: Joi.string(),
  MORGAN_FORMAT_TINY: Joi.string(),

  PROVIDER_GOOGLE: Joi.string(),
  PROVIDER_LOCAL: Joi.string(),

  ROLE_ADMIN: Joi.string(),
  ROLE_ROOT: Joi.string(),
  ROLE_SELLER: Joi.string(),
  ROLE_USER: Joi.string(),

  SESSION_SECRET: Joi.string(),

  STATUS_ACTIVE: Joi.string(),
  STATUS_DISABLED: Joi.string(),
  STATUS_UNVERIFIED_EMAIL: Joi.string(),

  TOKEN_PURPOSE_RESET_PASSWORD: Joi.string(),
  TOKEN_PURPOSE_VERIFY_EMAIL: Joi.string()
}).unknown();

const { value, error } = envVarsSchema.validate(process.env);
if (error) {
  console.log(
    chalk.red(
      '\n[-] Invalid environment variables. Please edit the ".env" file and restart the process.'
    )
  );
  throw new Error(error.message);
}

let envConfig = {
  env: value.NODE_ENV,
  jwt: {
    secret: value.JWT_SECRET
  },
  mongo: {
    uri: value.MONGO_URI
  },
  sendgrid: {
    apiKey: value.SENDGRID_API_KEY
  },
  server: {
    host: value.SERVER_HOST,
    port: value.SERVER_PORT,
    publicUrl: value.SERVER_PUBLIC_URL
  },
  oauth: {
    google: {
      clientID: value.GOOGLE_CLIENT_ID,
      clientSecret: value.GOOGLE_CLIENT_SECRET,
      callbackURL: value.GOOGLE_CALLBACK_URL,
      authorizationURL: value.GOOGLE_AUTHORIZATION_URL,
      tokenURL: value.GOOGLE_TOKEN_URL,
      scope: value.GOOGLE_SCOPE,
      pkce: value.GOOGLE_PKCE,
      state: value.GOOGLE_STATE
    }
  }
};

let config = {};

if (envConfig.env === constants.ENV_DEV) {
  config = require('./config.dev');
} else if (envConfig.env === constants.ENV_PROD) {
  config = require('./config.prod');
} else if (envConfig.env === constants.ENV_TEST) {
  config = require('./config.test');
}

config = _.merge({}, config, envConfig);

module.exports = config;
