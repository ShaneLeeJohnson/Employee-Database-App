const inquirer = require('inquirer');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const mysqlPassword = process.env.MYSQL_PASSWORD;

const question = [
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
    inquirer.prompt(question)
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
                    db.query('SELECT r.id, r.title, d.name AS department, r.salary FROM role r INNER JOIN department d ON r.department_id = d.id;', function (err, results) {
                        console.table(results);
                        init();
                    })
                    break;
                case 'View all employees':
                    db.query('SELECT e.id, e.first_name, e.last_name, r.title AS title, d.name AS department, r.salary, CONCAT(m.first_name, \' \', m.last_name) AS manager FROM employees e INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id;', function (err, results) {
                        console.table(results);
                        init();
                    })
                    break;
                case 'Add a department':
                    inquirer.prompt({
                        type: 'input',
                        name: 'addDepartment',
                        message: 'What is the name of the department?'
                    })
                        .then((answers) => {
                            const newDepartmentName = answers.addDepartment
                            const sql = `INSERT INTO department (name) VALUES (?)`;
                            db.query(sql, [newDepartmentName], (err, results) => {
                                if (err) throw err;
                                console.log(`Added ${newDepartmentName} to the department database`);
                                init();
                            });
                        })
                        .catch((err) => console.error(err));
                    break;
                case 'Add a role':
                    const roleQuestions = [
                        {
                            type: 'input',
                            name: 'roleTitle',
                            message: 'What is the title of the new role?',
                        },
                        {
                            type: 'number',
                            name: 'roleSalary',
                            message: 'What is the salary for the new role?',
                            validate: (value) => {
                                if (isNaN(value) || value <= 0) {
                                    return 'Please enter a valid positive number for salary.';
                                }
                                return true;
                            },
                        },
                        {
                            type: 'list',
                            name: 'departmentId',
                            message: 'Which department does this role belong to?',
                            choices() {
                                return new Promise((resolve, reject) => {
                                    db.query('SELECT id, name FROM department', (err, results) => {
                                        if (err) {
                                            reject(err);
                                            return;
                                        }
                                        resolve(results.map((department) => ({
                                            name: department.name,
                                            value: department.id,
                                        })));
                                    });
                                });
                            },
                        },
                    ];
                    inquirer.prompt(roleQuestions)
                        .then((answers) => {
                            const newRoleTitle = answers.roleTitle;
                            const newRoleSalary = answers.roleSalary;
                            const newRoleDepartmentId = answers.departmentId;
                            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
                            db.query(sql, [newRoleTitle, newRoleSalary, newRoleDepartmentId], (err, results) => {
                                if (err) throw err;
                                console.log(`Added ${newRoleTitle} to the role database`);
                                init();
                            });
                        })
                        .catch((err) => console.error(err));
                    break;
                default:
                    console.log('Press Ctrl C to exit');
            }
        });
}

init();