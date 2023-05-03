const VIEW_ALL_EMPLOYEES = `SELECT * FROM employee_db.employee`
const ADD_EMPLOYEE = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`

const VIEW_ALL_ROLES = `SELECT * FROM employee_db.role`
const ADD_ROLE = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
const VIEW_ALL_DEPARTMENTS = `SELECT * FROM employee_db.department`
const ADD_Department = `INSERT INTO departments SET ?`

module.exports = {VIEW_ALL_EMPLOYEES, ADD_EMPLOYEE, VIEW_ALL_ROLES, ADD_ROLE, VIEW_ALL_DEPARTMENTS, ADD_Department}