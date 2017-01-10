var db = require('./db');

function User() {

}

User.findAll = function (callback) {
    db.query('select * from user', function (err, data) {
        callback(err, data);
    });
};

User.findByUsername = function (username, callback) {
    var sql = 'select * from user where username = \'' + username + '\'';
    db.query(sql, function (err, data) {
        callback(err, data);
    })
};

User.add = function (user, callback) {
    var sql = "insert into user(username, password) values ('" + user.username + "','" + user.password + "')";
    db.query(sql, function (err, data) {
        console.log(data);
        callback(err, data);
    })
};


module.exports = User;