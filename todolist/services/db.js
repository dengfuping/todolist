var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: '',         // user
    password: '',     // password
    database: ''      //database
});

function Db() {

}

Db.query = function (sql, callback) {
    connection.query(sql, function (err, data) {
        if (err) 
        	throw err;
        callback(err, data);
    });
};

module.exports = Db;
