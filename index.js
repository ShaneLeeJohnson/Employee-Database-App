// Imports the inquirer package
const inquirer = require('inquirer');
// Imports the functions from the queries file
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateRole } = require('./queries/queries')

// Prompts the user with the options for how they want to manipulate the employee database
const question = [
    {
        type: 'list',
        name: 'dataOption',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    }
]

// Function that responds the the choice the user selects from the question prompt and handles each case. When the user selects Quit, the application exits.
function init() {
    inquirer.prompt(question)
        .then((answers) => {
            const choice = answers.dataOption
            console.log(choice);

            switch (choice) {
                case 'View all departments':
                    viewAllDepartments(init);
                    break;
                case 'View all roles':
                    viewAllRoles(init);
                    break;
                case 'View all employees':
                    viewAllEmployees(init);
                    break;
                case 'Add a department':
                    addDepartment(init);
                    break;
                case 'Add a role':
                    addRole(init);
                    break;
                case 'Add an employee':
                    addEmployee(init);
                    break;
                case 'Update an employee role':
                    updateRole(init);
                    break;
                default:
                    process.exit(0);
            }
        });
}

init();