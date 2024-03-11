const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    password: '123abc',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'mydatabase'
})

module.exports = {
    query: (text, params) => pool.query(text, params)
};