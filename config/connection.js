// Imports the mysql2 package
const mysql = require('mysql2');
// imports the dotenv package and calls the config method on it
require('dotenv').config();
// creates a variable that holds the mysql password from the .env file
const mysqlPassword = process.env.MYSQL_PASSWORD;

// creates the connection to the sql database using mysql2
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: mysqlPassword,
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

// exports the db variable so that it can be used in the queries file
module.exports = db;