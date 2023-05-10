
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES
  (1, 'John', 'Doe', 1, null),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Michael', 'Johnson', 3, 1),
  (4, 'Emily', 'Jones', 1, 1),
  (5, 'William', 'Davis', 2, 1);

INSERT INTO role (id, title, salary, department_id) 
VALUES
  (1, 'Software Engineer', 80000, 1),
  (2, 'Product Manager', 100000, 2),
  (3, 'Marketing Specialist', 60000, 3),
  (4, 'Accountant', 70000, 2),
  (5, 'Sales Representative', 50000, 2);
  
INSERT INTO department (id, name) 
VALUES
  (1, 'Software'),
  (2, 'Products'),
  (3, 'Marketing')