DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Should I user references like   FOREIGN KEY (instructor_id)
--   REFERENCES instructors(id)
  


-- epartment

--     id: INT PRIMARY KEY

--     name: VARCHAR(30) to hold department name

-- role

--     id: INT PRIMARY KEY

--     title: VARCHAR(30) to hold role title

--     salary: DECIMAL to hold role salary

--     department_id: INT to hold reference to department role belongs to

-- employee

--     id: INT PRIMARY KEY

--     first_name: VARCHAR(30) to hold employee first name

--     last_name: VARCHAR(30) to hold employee last name

--     role_id: INT to hold reference to employee role

--     manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the emplo