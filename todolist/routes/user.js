var express = require('express');
var router = express.Router();
var Todolist = require('../services/todolist');

router.get('/', function (req, res, next) {
    res.send('user');
});

router.get('/:username', function (req, res, next) {
    var username = req.params.username;
    res.render('todolist', {title: username, username: username})
});

router.get('/:username/todolist', function (req, res, next) {
    var username = req.params.username;
    console.log('名字是：' + username);
    var value = req.query.value;
    // 获取未完成事项
    if (value == 0) {
        console.log('请求的是未完成事项');
        Todolist.findAllByUsernameAndState(username, value, function (err, data) {
            console.log('数据是：' + data);
            res.json(data);
        });
    }
    // 获取已完成事项
    else if (value == 1) {
        console.log('请求的是已完成事项');
        Todolist.findAllByUsernameAndState(username, value, function (err, data) {
            console.log('数据是：' + data);
            res.json(data);
        });
    }
    // 获取全部事项
    else if (value == 2) {
        console.log('请求的是全部事项');
        var username = req.params.username;
        Todolist.findAllByUsername(username, function (err, data) {
            console.log('数据是：' + data);
            //res.render('todolist', {title: username, username: username, todolist: todolist})
            res.json(data);
        });
    }
    // 获取全部事项
    else {
        Todolist.findAllByUsername(username, function (err, data) {
            console.log('名字是：' + username);
            console.log('数据是：' + data);
            //res.render('todolist', {title: username, username: username, todolist: todolist})
            res.json(data);
        });
    }

});

router.post('/:username/todolist', function (req, res, next) {
    var username = req.params.username;
    var title = req.body.title;
    var description = req.body.description;
    var deadline = req.body.deadline;
    console.log('这是添加的Todolist：');
    console.log('名字是：' + username);
    console.log('title是：' + title);
    console.log('description是：' + description);
    console.log('deadline是：' + deadline);
    console.log('---------------------------------------------');
    var todolist = {
        username: username,
        title: title,
        description: description,
        deadline: deadline
    };
    Todolist.add(todolist, function (err, data) {
        if (err){
            console.log('Todolist.add error');
            throw err;
        }

        res.send('success');
    });
});

router.post('/:username/deleteTodolist', function (req, res, next) {
    var username = req.params.username;
    var title = req.body.title;
    var description = req.body.description;
    var deadline = req.body.deadline;
    console.log('这是删除的Todolist：');
    console.log('名字是：' + username);
    console.log('title是：' + title);
    console.log('description是：' + description);
    console.log('deadline是：' + deadline);
    console.log('---------------------------------------------');
    var todolist = {
        username: username,
        title: title,
        description: description,
        deadline: deadline
    };

    Todolist.delete(todolist, function (err, data) {
        if (err){
            console.log('Todolist.delete error');
            throw err;
        }

        res.send('success');
    });
});

router.post('/:username/editTodolist', function (req, res, next) {
    var username = req.params.username;
    var title = req.body.title;
    var description = req.body.description;
    var deadline = req.body.deadline;

    var newTitle = req.body.newTitle;
    var newDescription = req.body.newDescription;
    var newDeadline = req.body.newDeadline;
    console.log('名字是：' + username);
    console.log('这是编辑前的Todolist：');
    console.log('title是：' + title);
    console.log('description是：' + description);
    console.log('deadline是：' + deadline);
    console.log('---------------------------------------------');
    console.log('这是编辑后的Todolist：');
    console.log('newTitle是：' + newTitle);
    console.log('newDescription是：' + newDescription);
    console.log('newDeadline是：' + newDeadline);
    console.log('---------------------------------------------');
    var todolist = {
        username: username,
        title: title,
        description: description,
        deadline: deadline,
        newTitle: newTitle,
        newDescription: newDescription,
        newDeadline: newDeadline
    };

    Todolist.update(todolist, function (err, data) {
        if (err){
            console.log('Todolist.delete error');
            throw err;
        }

        res.send('success');
    });
});

router.post('/:username/setTodolistCompleted', function (req, res, next) {
    var username = req.params.username;
    var title = req.body.title;
    var description = req.body.description;
    var deadline = req.body.deadline;
    console.log('名字是：' + username);
    console.log('这是要设置已完成的Todolist：');
    console.log('title是：' + title);
    console.log('description是：' + description);
    console.log('deadline是：' + deadline);
    console.log('---------------------------------------------');

    var todolist = {
        username: username,
        title: title,
        description: description,
        deadline: deadline
    };

    Todolist.setTodolistCompleted(todolist, function (err, data) {
        if (err){
            console.log('Todolist.setTodolistCompleted error');
            throw err
        }

        res.send('success');
    });
});

module.exports = router;
