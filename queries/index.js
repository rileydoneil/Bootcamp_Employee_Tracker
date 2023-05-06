const VIEW_ALL_EMPLOYEES = 
`SELECT employee.id, employee.first_name, employee.last_name,
role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee
INNER JOIN role ON employee.role_id = role.id
INNER JOIN department ON role.department_id = department.id
LEFT JOIN employee m ON employee.manager_id = m.id;`
const ADD_EMPLOYEE = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`

const VIEW_ALL_ROLES = 
`SELECT role.id, role.title, department.name AS department, role.salary FROM role
INNER JOIN department ON role.department_id = department.id;`
const ADD_ROLE = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
const VIEW_ALL_DEPARTMENTS = `SELECT * FROM employee_db.department`
const ADD_Department = `INSERT INTO departments SET ?`

module.exports = {VIEW_ALL_EMPLOYEES, ADD_EMPLOYEE, VIEW_ALL_ROLES, ADD_ROLE, VIEW_ALL_DEPARTMENTS, ADD_Department}