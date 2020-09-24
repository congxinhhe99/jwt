var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-jwt',
    debug: true
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;