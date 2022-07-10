/**
 * Proxy middleware for Express
 *
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:8861',
      secure: false,
      changeOrigin: true
    })
  );
};
