const inquirer = require('inquirer');
const mysql = require('mysql2');
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

            switch (choice) {
                case 'View all departments':
                    db.query('SELECT * FROM department', function (err, results) {
                        if (err) throw err;

                        if (results.length === 0) {
                            console.log('No departments found');
                            return;
                        }

                        console.table(results);
                        init();
                    })
                    break;
                case 'View all roles':
                    db.query('SELECT * FROM role', function (err, results) {
                        console.table(results);
                        init();
                    })
                default:
                    console.log('Press Ctrl C to exit');
            }
        });
}

init();