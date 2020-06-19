const keys = require('../keys');
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on('error', (err) => console.error('idle client error', err.message, err.stack));

module.exports = { pgClient };
