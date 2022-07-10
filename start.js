/**
 * This script run yarn processes concurrently
 *
 * Usage: [test|server|client|server:client|build|install-children]
 *
 * Example:
 * * node install-children
 * * node start test
 * * node start server
 * * node start client
 * * node start server:client
 * * node start install-children
 * * node build client
 */

const concurrently = require('concurrently');
const chalk = require('chalk');
const figlet = require('figlet');
const _ = require('lodash');

const getUppercaseArgs = () => {
  validArgs = ['test', 'server', 'client', 'server:client', 'install-children', 'build'];

  if (process.argv.length === 2) {
    process.argv.push('server:client');
  } else if (process.argv.length > 3 && process.argv[2] === 'build') {
    process.argv.push('client');
  } else if (process.argv.length > 3) {
    throw new Error(`[-] Invalid command. Please specify only one argument`);
  }

  if (_.findIndex(validArgs, (arg) => arg === process.argv[2]) === -1) {
    throw new Error(`[-] Invalid argument ${process.argv[2]}`);
  }
  const args = process.argv[2].split(':').map((arg) => arg.toUpperCase());
  return args;
};

const run = () => {
  const logo = figlet.textSync('Kobol', {
    font: '3D-ASCII'
  });
  console.log(chalk.cyan(logo));

  const upperCaseArgs = getUppercaseArgs();
  let availableCommands = [
    {
      command: 'node start-helper install-children',
      name: 'INSTALL-CHILDREN',
      prefixColor: 'gray'
    },
    {
      command: 'node start-helper test',
      name: 'TEST',
      prefixColor: 'cyan'
    },
    {
      command: 'node start-helper server',
      name: 'SERVER',
      prefixColor: 'cyan'
    },
    {
      command: 'node start-helper client',
      name: 'CLIENT',
      prefixColor: 'yellow'
    },
    {
      command: 'node start-helper build',
      name: 'BUILD',
      prefixColor: 'green'
    }
  ];

  const commands = _.filter(availableCommands, (command) => {
    return _.some(upperCaseArgs, (arg) => command.name === arg);
  });

  const options = {
    prefix: 'name',
    restartTries: 0,
    restartDelay: 0,
    successCondition: 'all'
  };

  const { result } = concurrently(commands, options);

  result
    .then((success, failure) => {})
    .catch((err) => {
      if (err) {
        process.exit(1);
      }
    });
};

run();
