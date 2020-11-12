const { Pool } = require('pg');

module.exports = new Pool({

    user: 'pablo',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'

});