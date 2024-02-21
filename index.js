const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'dataOption',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const choice = answers.dataOption
        console.log(choice);
    })
}

init();