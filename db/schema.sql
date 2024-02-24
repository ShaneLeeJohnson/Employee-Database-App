-- deletes the database if it already exists and then creates a new company_db
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

-- selects the company_db for use
USE company_db;

-- Creates the department table schema with id and name fields
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Creates the role table schema with id, title, salary, and department id fields.
-- The department_id is a reference to the id field from the department table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- Creates an employees table schema with id, first_name, last_name, role_id, and manager_id fields.
-- The role_id is a reference to the id field from the role table and the manager_id is a reference to the
-- id field from within the same employees table.
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);