var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('SELECT * FROM t_accounts', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].account);
});
conn.end();