const mysql = require('mysql2');
require('dotenv').config();
const mysqlPassword = process.env.MYSQL_PASSWORD;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: mysqlPassword,
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

module.exports = db;