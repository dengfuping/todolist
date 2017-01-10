var express = require('express');
var router = express.Router();
var User = require('../services/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/signin', function (req, res, next) {
    res.redirect('/');
});

router.post('/signin', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (username != null) {
        User.findAll(function (err, data) {
            var temp = 0;
            for (var i = 0; i < data.length; i++) {
                if (username != data[i].username)
                    temp++;
            }
            if (temp == data.length)
                res.send('用户不存在，<a href="/">点击此处</a>重新登录');
            else {
                User.findByUsername(username, function (err, data) {
                    if (err) {
                        console.log('User.findByUsername error');
                        throw err;
                    }
                    if (password == data[0].password) {
                        res.redirect('/user/' + username);
                    }
                    else
                        res.send('密码错误，<a href="/">点击此处</a>重新登录');
                })
            }
        });
    }
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (username != null) {
        User.findByUsername(username, function (err, data) {
            if (err) {
                console.error('User.findByUsername error');
                throw err;
            }

            if (data.length == 0) {
                var user = {
                    username: username,
                    password: password
                };

                User.add(user, function (err, data) {
                    if (err) {
                        console.error('User.add error');
                        throw err;
                    }

                    //res.send('<p>注册成功，<a href="/">点击此处</a>进行登录</p>');
                    res.send('success');
                });
            }

            //res.send('<p>用户已存在，<a href="/signup">点击此处</a>重新注册</p>');
            else
                res.send('existed');
        });
    }
});

module.exports = router;
