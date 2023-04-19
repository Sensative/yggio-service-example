'use strict';

// The host of yggio-service-example backend
// Will be 127.0.0.1 if backend is run locally
const BACKEND_HOST = '127.0.0.1';

// The port used by the yggio-service-example backend
// Should be the same as in frontend/src/constants/index.js
// Set to 9999 as default
const BACKEND_PORT = '9999';

// The URL to the yggio-service-example frontend
// Will be http://localhost if frontend is run locally
const FRONTEND_URL = 'http://localhost';

// The port used by the yggio-service-example frontend
// Should be the same as in frontend/.env
// Set to 9492 as default
const FRONTEND_PORT = '9492';

// The URL of the REST API of the Yggio you want to use
// Should be the same as in frontend/src/constants/index.js
// https://staging.yggio.net is a suitable test server and is set as default
const YGGIO_API_URL = 'https://staging.yggio.net/';

// The name of the client that is created
// Can be set to anything
const CLIENT_NAME = 'micke-service-example-2';

// Username of the user that creates the client
// Can be set to anything
const YGGIO_ACCOUNT_USERNAME = 'test';

// Password of the user that creates the client
// Can be set to anything
const YGGIO_ACCOUNT_PASSWORD = 'test';

module.exports = {
  BACKEND_HOST,
  BACKEND_PORT,
  FRONTEND_URL,
  FRONTEND_PORT,
  YGGIO_API_URL,
  CLIENT_NAME,
  YGGIO_ACCOUNT_USERNAME,
  YGGIO_ACCOUNT_PASSWORD
};
