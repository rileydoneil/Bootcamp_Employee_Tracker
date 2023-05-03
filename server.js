const express = require('express');
//import init
const init = require('./app/index');
// Import and require mysql2
const mysql = require('mysql2');
// Hide sensitive information
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.user,
    // MySQL password
    password: process.env.password,
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`),
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function start() {
  init();
}

start();
module.exports = db