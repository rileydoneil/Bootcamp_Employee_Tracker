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
  ]

async function init() {
     const { answer } = await inquirer.prompt(question);
        switch(answer) {
            case 'View All Employees': {
                let data = await viewEmployees();
                console.table(data);
                return init();  
            }
            case 'Add Employee': {
                let data = await addEmployee();
                console.table(data)
                return init();
            }
            case 'Update Employee Role': {
                return init();
            }
            case 'View All Roles': {
                await viewRoles();
                return init();
            }
            case 'Add Role': {
                await addRole();
                return init();
            }
            case 'View All Departments': {
                await viewDepartments();
                return init();
            }
            case 'Add Department': {
                await addDepartment();
                return init();
            }
            case 'Quit': {
                break;
            }
            // default:
            // console.log('Invalid choice');
        };
};

module.exports = init;