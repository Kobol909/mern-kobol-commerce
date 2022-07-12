/**
 * This script provide a cross-platform way for starting yarn process in child directory.
 *
 * Usage: node start-helper.js [test|server|client|server:client|build|install-children|prod]
 *
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ngrok = require('ngrok');
// const figlet = require('figlet');
const dotenv = require('dotenv');
const chalk = require('chalk');
const kill = require('tree-kill');
const _ = require('lodash');

dotenv.config();

const options = [
  {
    name: 'server',
    command: 'yarn',
    arguments: ['start', 'prod'],
    workingDirs: 'server',
    message: 'API server is starting...'
  },
  {
    name: 'client',
    command: 'yarn',
    arguments: ['start', 'build', 'prod'],
    workingDirs: 'client',
    message: ['Web client is starting...', 'Web client is building...', 'Web client is running...']
  },
  {
    name: 'mobile',
    command: 'yarn',
    arguments: ['start'],
    workingDirs: 'mobile',
    message: 'Starting mobile...'
  },
  {
    name: 'test',
    command: 'yarn',
    arguments: ['run', 'test'],
    workingDirs: ['server'],
    message: 'Running tests for: '
  },
  {
    name: 'install-children',
    command: 'yarn',
    arguments: ['install'],
    workingDirs: ['server', 'client', 'mobile'],
    message: 'Installing dependencies for: '
  },
  {
    name: 'build',
    command: 'yarn',
    arguments: ['build'],
    workingDirs: ['client'],
    message: 'Building React: '
  },
  {
    name: 'prod-server:client',
    command: 'yarn',
    arguments: ['prod', 'start'],
    workingDirs: ['server', 'client'],
    message: ['Starting production server...', 'Starting production client...']
  },
  {
    name: 'prod-server',
    command: 'yarn',
    arguments: ['prod'],
    workingDirs: ['server'],
    message: 'Starting production server...'
  }
];

const start = () => {
  if (process.argv.length !== 3) {
    throw new Error(`[-] Invalid command. Please specify the argument`);
  }

  let command = _.find(options, (opt) => {
    if (opt.name === process.argv[2]) {
      return opt;
    }
    if (opt.name === 'prod-server:client') {
      return opt[6];
    }
  });
  if (!command) {
    throw new Error(`[-] Invalid argument "${process.argv[2]}"`);
  }

  if (command.name === 'mobile') {
    runMobile(command);
  } else {
    process.exit(run(command));
  }
};

const run = (command) => {
  const cmd = command.command;
  if (_.isArray(command.workingDirs)) {
    status = 0;
    command.workingDirs.forEach((dir) => {
      const opts = { cwd: dir, shell: true, stdio: 'inherit' };
      console.log(chalk.cyan(`\n[*] ${command.message} ${dir}...\n`));
      const child = spawnSync(cmd, command.arguments, opts);
      status += child.status;
    });
    return status;
  } else {
    const opts = { cwd: command.workingDirs, shell: true, stdio: 'inherit' };
    console.log(chalk.cyan(`[*] ${command.message}`));
    return spawnSync(cmd, command.arguments, opts);
  }
};

const runMobile = (command) => {
  console.log(chalk.cyan('[*] Creating Ngrok tunnel...'));

  /**
   * Use ngrok to create public URL for API server. Then export this public URL as
   * an environment variable
   */
  ngrok
    .connect({ proto: 'http', addr: process.env.SERVER_PORT, bind_tls: true })
    .then((ngrokUrl) => {
      console.log(
        chalk.greenBright(
          `\n[+] Ngrok forwarding: ${ngrokUrl} ==> http://localhost:${process.env.SERVER_PORT}`
        )
      );

      process.env.REACT_NATIVE_API_SERVER_URL = ngrokUrl;
      console.log(
        chalk.greenBright(`[+] Export env var REACT_NATIVE_API_SERVER_URL="${ngrokUrl}"`)
      );

      updateMobileDotEnvFileSync(ngrokUrl);

      const mobileProcess = run(command);

      // The Ngrok URL will be expired after 8 hours
      setTimeout(() => {
        kill(mobileProcess.pid);
        printExpiredUrlMessage(ngrokUrl);
      }, 8 * 60 * 60 * 1000); // 8 hours
    });
};

const updateMobileDotEnvFileSync = (ngrokUrl) => {
  const dotEnvFile = path.resolve(__dirname, './mobile/.env');
  let content = fs.readFileSync(dotEnvFile, { encoding: 'utf8' });
  content = content.replace(
    /^.*REACT_NATIVE_API_SERVER_URL.*$/gm,
    `REACT_NATIVE_API_SERVER_URL=${ngrokUrl}`
  );
  fs.writeFileSync(dotEnvFile, content, { encoding: 'utf8' });
  console.log(chalk.greenBright(`[+] The file '${dotEnvFile}' has been updated\n`));
};

const printExpiredUrlMessage = (ngrokUrl) => {
  // const artText = figlet.textSync('Ngrok URL expired', { font: 'Big' });
  console.log(chalk.red(`\n\n${artText}`));
  console.log(chalk.red(`\n[-] The ngrok URL "${ngrokUrl}" is expired`));
  console.log(chalk.red(`[-] The mobile server is killed`));
  console.log(chalk.cyan('\n[*] Please press Ctrl + C to exit'));
  console.log(chalk.cyan('[*] Then, run `yarn start` or `yarn run mobile`\n'));
};

start();
