// This file will handle connection logic to the MySQL database

const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Allam2588@', // Replace with your MySQL password
    database: 'MyTaskManager' // Replace with your database name
});

// Attempt to acquire a connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error while attempting to connect to MySQL');
        console.error(err);
    } else {
        console.log('Connected to MySQL successfully :)');

        // Release the connection
        connection.release();
    }
});

module.exports = {
    pool
};
