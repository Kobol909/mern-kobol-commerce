/**
 *  Configuration for SendGrid
 *  ==========================
 *
 */
const Email = require('sendgrid-template-helper');
const config = require('../config');

const email = new Email({
  apiKey: config.sendgrid.apiKey,
  // prefix: `${config.app.name}_`
  prefix: config.app.name
});

module.exports = email;
