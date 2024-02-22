INSERT INTO department (id, name)
VALUES (1, 'accounting'), 
        (2, 'sales'),
        (3, 'service');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'lead accountant', 100000, 1),
        (2, 'accountant', 80000, 1),
        (3, 'sales manager', 150000, 2),
        (4, 'sales lead', 70000, 2);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Shane', 'Johnson', 1, null),
        (2, 'Gabe', 'Harvey', 2, 1),
        (3, 'Kalyn', 'Sifuentez', 3, null),
        (4, 'Danny', 'Sanchez', 4, 3);