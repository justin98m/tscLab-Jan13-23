const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
var con = mysql.createConnection({
        //should be a hidden env var
        connectionLimit:5,
        host: "localhost",
        user: "root",
        password: process.env.password,
        database: "classicmodels",
        multipleStatements: true
});



module.exports = con;