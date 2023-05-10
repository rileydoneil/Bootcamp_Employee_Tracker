const inquirer = require('inquirer');
const db = require('../connection/connection');
const {VIEW_ALL_EMPLOYEES, ADD_EMPLOYEE, VIEW_ALL_ROLES, ADD_ROLE, VIEW_ALL_DEPARTMENTS, ADD_Department} = require('../queries/index');

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
  
// var sql = `INSERT INTO department (id, name) VALUES ('6', 'test2')`;
// db.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("1 record inserted, ID: " + result.insertId);
//   return result;
// });

async function viewEmployees() {
    let data = await db.promise().query(VIEW_ALL_EMPLOYEES);
    let [answer] = data;
    return answer;
}

async function viewRoles() {
    let data = await db.promise().query(VIEW_ALL_ROLES);
    let [answer] = data;
    return answer;
}

async function viewDepartments() {
    let data = await db.promise().query(VIEW_ALL_DEPARTMENTS);
    let [answer] = data;
    return answer;
}


//https://snyk.io/advisor/npm-package/inquirer/functions/inquirer.prompt
//figured out how to get multiple variables back without .then(answers =>)
async function addEmployee() {
    const question = [{
        type: 'input',
        name: 'firstName',
        message: 'Employee first name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Employee last name'
    },
    {
        type: 'input',
        name: 'role',
        message: 'Employee role'
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Employee's manager id"
    }];

    const {firstName, lastName, role, managerID} = await inquirer.prompt(question);
    let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', '${role}', '${managerID}');`
    db.promise().query(sql);
    // async () => {
    //     let [data] = await db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, role, managerID]);
    //     return data;
    // };

    
}

async function addRole() {
    let question = [{
        type: 'input',
        name: 'title',
        message: 'Role Title'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Role Salary'
    },
    {
        type: 'input',
        name: 'departmentID',
        message: 'Department ID'
    }];
    const {title, salary, departmentID} = await inquirer.prompt(question)
    let sql = `INSERT INTO role (title, salary, department_id) VALUES ('${title}','${salary}','${departmentID}');`;
    db.promise().query(sql);
    // let [data] = db.promise().query(ADD_ROLE, [title, salary, departmentID]);
    // return data;
}

async function addDepartment() {
    console.log('made it to addDepartment');
    const question = [{
        type: 'input',
        name: 'departmentID',
        message: 'What is the Department ID'
    },
    {
        type: 'input',
        name: 'departmentName',
        message: "What is the Department Name"
    }];
    const {departmentID, departmentName} = await inquirer.prompt(question);
    

    var sql = `INSERT INTO department (id, name) VALUES ('${departmentID}', '${departmentName}')`;
    db.promise().query(sql);
    // return data;
    // let [data] = db.promise().query(ADD_Department, [departmentID, departmentName]);
    // return data;
    
}

module.exports = {viewEmployees, viewRoles, viewDepartments, addEmployee, addRole, addDepartment}