-- Inserts seed data into the department table
INSERT INTO department (id, name)
VALUES (1, 'accounting'), 
        (2, 'sales'),
        (3, 'service');

-- Inserts seed data into the role table
INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'lead accountant', 100000, 1),
        (2, 'accountant', 80000, 1),
        (3, 'sales manager', 150000, 2),
        (4, 'sales lead', 70000, 2);

-- Inserts seed data into the employees table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Michael', 'Scott', 3, null),
        (2, 'Angela', 'Martin', 1, 1),
        (3, 'Dwight', 'Schrute', 4, 1),
        (4, 'Oscar', 'Martinez', 2, 1);