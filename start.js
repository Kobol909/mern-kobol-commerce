const concurrently = require('concurrently');
const chalk = require('chalk');
const _ = require('lodash');

const getUppercaseArgs = () => {
  validArgs = [
    // TODO: Add 'dev' to the list of valid args
    'test',
    'server',
    'client',
    'server:client',
    'install-children',
    'build',
    'serve',
    'prod-server',
    'prod-server:serve'
  ];

  if (process.argv.length === 2) {
    process.argv.push('server:client');
  } else if (process.argv[2] === 'serve') {
    process.argv.push('client');
  } else if (process.argv.length > 3 && process.argv[5] !== 'prod-server:client') {
    throw new Error(`[-] Invalid command. Please specify only one argument`);
  }

  if (_.findIndex(validArgs, (arg) => arg === process.argv[2]) === -1) {
    throw new Error(`[-] Invalid argument ${process.argv[2]}`);
  }
  const args = process.argv[2].split(':').map((arg) => arg.toUpperCase());
  return args;
};

const run = () => {
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
    },
    {
      command: 'node start-helper serve',
      name: 'SERVE',
      prefixColor: 'green'
    },
    {
      command: 'node start-helper prod-server',
      name: 'PROD-SERVER',
      prefixColor: 'green'
    },
    {
      command: 'node start-helper prod',
      name: 'PROD-SERVER:SERVE',
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
