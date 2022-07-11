/**
 *  Express server setup
 *  ====================
 *
 */
const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const session =
  process.NODE_ENV === 'development' ? require('express-session') : require('cookie-session');
const routes = require('../routes');
const passport = require('./passport/passportStrategies');
const config = require('../config/index');
const constants = require('./constants');

// App Setup
const app = express();

if (config.trustProxy.enabled) {
  app.set('trust proxy', config.trustProxy.value);
}

// Logger
if (config.morgan.enabled) {
  app.use(morgan(config.morgan.format, config.morgan.options));
}

// Compression
if (config.compression.enabled) {
  app.use(compression(config.compression.options));
}

// Secure app by setting various HTTP headers
if (config.helmet.enabled) {
  app.use(helmet(config.helmet.options));
}

// Cross-Origin-Resource-Sharing
if (config.cors.enabled) {
  app.use(cors(config.cors.options));
}

// Set up session
if (config.session.enabled) {
  app.use(session(config.session.options));
}

// Set up Proxy
if (config.proxy.enabled) {
  app.use(createProxyMiddleware(config.proxy.options));
}

app.set('etag', config.etag.enabled);

// Support parsing of application/x-www-form-urlencoded post data
// app.use(express.urlencoded({ extended: true }));

// Support parsing of */* type post data
app.use(express.json({ type: '*/*' }));

// Passport initialization
app.use(passport.initialize());

// Passport session initialization
app.use(passport.session());

// Add routes from the routes/index.js file
app.use(routes);

// Add public folder to serve static files
app.use('/public', express.static(path.resolve(__dirname, '../public')));

// Redirect all requests to the index.html file
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 errors and forward to error handler by default
app.use((req, res, next) => {
  res.format({
    'application/json': () => next(createError(404, 'Not Found')),
    'text/html': () => {
      res.sendFile(path.resolve(__dirname, '../public/404.html'));
    },
    default: () => next(createError(404, 'Not Found'))
  });
});

// error handler
// print stacktrace during development
// and send stacktrace to client
if (config.env === constants.ENV_DEV) {
  app.use((err, req, res, next) => {
    console.log('[DEV]', err.stack);
    res.status(err.status || 400).json({ error: { message: err.message, details: err.stack } });
  });
}

// error handler
// no stacktrace sent to client
app.use((err, req, res, next) => {
  res.status(err.status || 400).json({ error: { message: err.message } });
});

module.exports = app;
