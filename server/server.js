/**
 * This is the entry point for the server.
 */
const http = require('http');
const https = require('https');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const listEndpoints = require('express-list-endpoints');

// Load mongoose and models
require('./core/mongoose');

// Load express
const app = require('./core/express');

// TODO: Add the https configuration in the config file
let server;

// switch (config.https.enabled) {
//   case true:
//     server = https.createServer(
//       {
//         key: fs.readFileSync(path.join(__dirname, '../key.pem')),
//         cert: fs.readFileSync(path.join(__dirname, '../cert.pem'))
//       },
//       app
//     );
//     break;
//   case false:
//     server = http.createServer(app);
//     break;
//   case NODE_ENV !== 'development': // For heroku, we need to use the http protocol
//     // See: https://stackoverflow.com/questions/25148507/https-ssl-on-heroku-node-express
//     server = http.createServer(app);
//     break;
//   default:
//     throw new Error('Invalid value for config.https.enabled');
// }

server = http.createServer(app);

if (config.port == null || config.port === '') {
  port = 8861;
}

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(config.server.port);
// End of https configuration

const displayAllEndpoints = () => {
  const endpoints = listEndpoints(app);
  let total = 0;
  console.log(chalk.cyanBright(`\n[*] API Endpoints:`));
  endpoints.forEach(({ path, methods, middleware }) => {
    methods.forEach((method) => {
      // Helper function to colorize the status of a configuration option
      const colorizerEndPoints = (str) => {
        if (method === 'GET') {
          return chalk.green(str);
        } else if (method === 'POST') {
          return chalk.yellow(str);
        } else if (method === 'PUT') {
          return chalk.blue(str);
        } else if (method === 'DELETE') {
          return chalk.red(str);
        } else {
          return chalk.gray(str);
        }
      };

      total += 1;
      console.log(colorizerEndPoints(`[+] ${method.padEnd(6)}`), colorizerEndPoints(path));
    });
  });
  console.log(chalk.cyanBright(`[*] Total: ${total} endpoints\n`));
};

const displayConfigurationStatus = () => {
  console.log(chalk.cyanBright(`\n[ ${config.app.title + ' configuration settings'}]\n`));
  console.log(chalk.green(`[*] Environment => ${config.env.toUpperCase()}`));

  console.log(chalk.gray(`[*] Auth - Email verification: ${config.auth.verifyEmail}`));
  console.log(chalk.gray(`[*] Auth - Google sign-in: ${config.auth.googleSignIn}`));
  console.log(chalk.gray(`[*] Auth - Password reset: ${config.auth.resetPassword}`));
  console.log(chalk.gray(`[*] Compression: ${config.compression.enabled}`));
  console.log(chalk.gray(`[*] Cors: ${config.cors.enabled}`));
  console.log(chalk.gray(`[*] Etag: ${config.etag.enabled}`));
  console.log(chalk.gray(`[*] Helmet: ${config.helmet.enabled}`));
  console.log(chalk.gray(`[*] Https: ${config.https.enabled}`));
  console.log(chalk.gray(`[*] Morgan: ${config.morgan.enabled}`));
  console.log(chalk.gray(`[*] Proxy: ${config.proxy.enabled}`));
  console.log(chalk.gray(`[*] RateLimit: ${config.rateLimit.enabled}`));
  console.log(chalk.gray(`[*] Session: ${config.session.enabled}`));
  console.log(chalk.gray(`[*] TrustProxy: ${config.trustProxy.enabled}`));
};

displayConfigurationStatus();
displayAllEndpoints();

console.log(chalk.gray('_______________________'));

console.log(chalk.green(`\n[*] Server is running in ${config.env.toUpperCase()}`));

console.log(chalk.gray('____________________________________'));

if (config.proxy.enabled) {
  console.log(chalk.green(`\n[*] Proxy is listening on port:${config.proxy.port}\n`));
} else {
  console.log(chalk.green(`\n[*] Server API is listening on port:${config.server.port}\n`));
}

console.log(chalk.gray(`[*] Press CTRL + C to stop the server`));

global.app = app;
