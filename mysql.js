/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zhao1987',
    database:'test',
    port: 3306
});
conn.connect();
conn.query('SELECT id from user', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].id);
});
conn.end();
