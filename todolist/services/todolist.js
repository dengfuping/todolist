var db = require('./db');

function Todolist() {

}


Todolist.findAllByUsername = function (username, callback) {
    var sql = "select * from todolist where username = '" + username + "' order by deadline";
    db.query(sql, function (err, data) {
        callback(err, data);
    });
};

Todolist.findAllByUsernameAndState = function (username, state, callback) {
    var sql = "select * from todolist where username = '" + username + "' and state = " + state;
    db.query(sql, function (err, data) {
        callback(err, data);
    })
};


Todolist.add = function (todolist, callback) {
    var sql = "insert into todolist(username, title, description, deadline, state) values ('" + todolist.username + "','" + todolist.title + "','" + todolist.description + "','" + todolist.deadline + "'," + 0 + ")";
    db.query(sql, function (err, data) {
        console.log(data);
        callback(err, data);
    })
};

Todolist.delete = function (todolist, callback) {
    var sql = "delete from todolist where username ='" + todolist.username + "' and title = '" + todolist.title + "' and description = '" + todolist.description + "' and deadline = '" + todolist.deadline + "'";
    db.query(sql, function (err, data) {
        console.log(data);
        callback(err, data);
    })
};

Todolist.update = function (todolist, callback) {
    var sql = "update todolist set title = '" + todolist.newTitle + "', description = '" + todolist.newDescription + "', deadline = '" + todolist.newDeadline + "' where username = '" + todolist.username  + "' and title = '" + todolist.title + "' and description = '" + todolist.description + "' and deadline = '" + todolist.deadline + "'";
    db.query(sql, function (err, data) {
        console.log(data);
        callback(err, data);
    })
};

Todolist.setTodolistCompleted = function (todolist, callback) {
    var sql = "update todolist set state = 1 where title = '" + todolist.title + "' and description = '" + todolist.description + "' and deadline = '" + todolist.deadline + "'";
    db.query(sql, function (err, data) {
        console.log(data);
        callback(err, data);
    })
};

module.exports = Todolist;