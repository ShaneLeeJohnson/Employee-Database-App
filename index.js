const inquirer = require('inquirer');
const mysql = require('mysql2');
const TextTable = require('text-table');
const dotenv = require('dotenv');
dotenv.config();
const mysqlPassword = process.env.MYSQL_PASSWORD;

const questions = [
    {
        type: 'list',
        name: 'dataOption',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    }
]

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: mysqlPassword,
        database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const choice = answers.dataOption
            console.log(choice);

            if (choice === 'View all departments') {
                db.query('SELECT * FROM department', function (err, results) {
                    if (err) throw err;

                    if (results.length === 0) {
                        console.log('No departments found');
                        return;
                    }

                    console.table(results);
                    init();
                })
            } else if (choice === 'Quit') {
                return;
            }
        });
}

init();