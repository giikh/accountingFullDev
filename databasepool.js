const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseconfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;