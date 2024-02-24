# Employee-Database-App

## Description

The Employee Database App allows an organization to manage their employee data by giving them options for different tables including all departments, all roles, and all employees. The employer can also use this app to add new departments, employees and roles to the database as well as update the role of an existing employee.

## Installation

This application requires node.js to run. The user will also have to install all dependencies as well including inquirer, dotenv, and mysql2.

## Usage

To use this application, the user will need to open their command line terminal (bash for windows). After ensuring that they have node.js and all dependencies installed, they can start the application by running node index.js. The user will then be prompted with a list of options for what they would like to do. The options are view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. When the user selects view all departments, they will see a table for the department id's and names of those departments. When they select view all roles, they will see a table for the role id's, role titles, the departments the roles belong to, and the salary for each role. When the user selects the view all employees option, they will see a table for the employee id's, the first and last name of each employee, the employee's title, the department they work for, their salary, and the name of each employee's manager. If the employee doesn't have a manager then the field will be null. When the user selects the add a department option, they will be prompted to enter a department name and that department will be added to the department table. When the user selects the add a role option, they will be prompted to enter the title of the role, the salary for the role, and select from a list of departments that the role will belong to and then the role is added to the role table. When the user selects the add an employee option, they will be prompted to enter the employee's first and last name, select their role from the existing roles, and choose if they have a manager from a list of employees. The user can select none if the employee being added won't have a manager, then the employee will be added to the employees table. When the user selects the update employee role, they will select the employee they wish to update the role for, then choose from the list of roles to assign to the employee. After this the employee's role will be updated and can be seen when viewing all employees.

To see the application in action, please watch the following video:

[Employee-Database-App-Demo.webm](https://github.com/ShaneLeeJohnson/Employee-Database-App/assets/77424320/fd6310a5-46f5-48ec-9489-5de26532a350)

## License

Please refer to the LICENSE in the repo.
