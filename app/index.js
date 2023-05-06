const inquirer = require('inquirer');
const {viewEmployees, viewRoles, viewDepartments, addEmployee, addRole, addDepartment} = require('../helpers/index');

const question = [
    {
      type: 'list',
      name: 'answer',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Quit'
      ]
    }
];

async function init() {

     const { answer } = await inquirer.prompt(question)
        switch(answer) {
            case 'View All Employees': {
                let data = await viewEmployees();
                console.table(data);
                // console.log('hello');
                return init();  
            }
            case 'Add Employee': {
                let data = await addEmployee();
                console.log(`${data} has been added! `);
                return init();
            }
            case 'Update Employee Role': {
                return init();
            }
            case 'View All Roles': {
                let data = await viewRoles();
                console.table(data);
                return init();
            }
            case 'Add Role': {
                let data = await addRole();
                return init();
            }
            case 'View All Departments': {
                let data = await viewDepartments();
                console.table(data);
                return init();
            }
            case 'Add Department': {
                await addDepartment();
                return init();
            }
            case 'Quit': {
                process.exit();
            }
            // default:
            // console.log('Invalid choice');
        };
};

module.exports = init;