'use strict';

process.title = 'yggio-service-example';

const _ = require('lodash');
const yggioConnect = require('yggio-connect');

const config = require('./config');
const commonConfig = require('./config/common');
const seedDb = require('../tools/seed-db');
const {resetUsers, saveClientApp} = require('./components/db');
const storedOAuthInfo = require('../db/oauth-info.json');

let server;

// Setup exress
const initExpress = () => {
  console.log('Express HTTP server - starting...');
  const http = require('http');
  const app = require('express')();
  server = http.createServer(app);
  const expressConfig = require('./components/express-config');
  expressConfig.apply(app);
  return new Promise(resolve => {
    server.listen(config.express.port, config.express.host, () => {
      console.log('Express HTTP server - ready');
      resolve();
    });
  });
};

// Registers and logs in the service client, then registers the service.
// Registering the service grants the yggio-api access to protected
// requests for services such as OAuth and subscriptions.
// This function is idempotent.
const setup = async () => {

  console.log('### ### ### ### YGGIO API - setup...');

  const {updateUser} = require('./components/db');
  config.yggio.refreshCallback = updateUser;

  const result = await yggioConnect.init(config.yggio, storedOAuthInfo);

  saveClientApp(result.client);

  console.log('### ### ### ### YGGIO API - ready');

  // await seedDb.createExampleUsers(); // Currently broken
  // await seedDb.createExampleNodes(); // Broken due to users being broken

  // // uncomment this code  to reset users when server starts
  // console.log('Resetting users...');
  // resetUsers();
  // console.log('Successfully reset users.');

  await initExpress();
};

const validateConfigurations = () => {
  const errors = _.compact(_.map(commonConfig, (value, key) => {
    return !value && key;
  }));
  if (errors.length) {
    const keys = _.join(errors, ', ');
    throw new Error(`The configuration(s) ${keys} cannot be empty. Please provide it in config/common.js`);
  }
};

const start = async () => {
  try {
    console.log('-- Starting Yggio Service Example backend --');
    validateConfigurations();
    await setup();
    console.log('-- Yggio Service Example backend started successfully --');
  } catch (e) {
    console.error('Could not start service:', e.stack);
    process.exit(1);
  }
};

start();
