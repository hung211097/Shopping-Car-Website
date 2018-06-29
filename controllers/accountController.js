var express = require('express'),
    SHA256 = require('crypto-js/sha256');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrictlogin');
var router = express.Router();

router.get('/register', restrict, (req, res) => {
    res.render('account/register');
});

router.get('/login', restrict, (req, res) => {
    res.render('account/login');
});

router.post('/register', (req, res) => {

    var user = {
        username: req.body.SUID,
        password: SHA256(req.body.SUPass).toString(),
        name: req.body.SUHoTen,
        email: req.body.SUEmail
    };

    var userLogin = {
        Username: req.body.SUID,
        Password: SHA256(req.body.SUPass).toString(),
        Name: req.body.SUHoTen,
        Email: req.body.SUEmail
    }
    accountRepo.exist(user).then(rows => {
        if (rows.length > 0)
        {
            var vm = {
                showError: true,
                errorMsg: 'Register failed',
                User: user
            };
            res.render('account/register', vm);
        }
        else
        {
            accountRepo.add(user).then(value => {
                // setTimeout(function() {
                    // console.log('Register successful');
                    req.session.isLogged = true;
//                    accountRepo.login(user).then(row => {
//                        if (row.length > 0){
//                            console.log(row[0]);
                            req.session.user = userLogin;
//                        }
//                        else
//                        {
//                           console.log('error');
//                        }
//                    });
                    //req.session.cart = [];
                    var vm = {
                        showSuccess: true,
                        errorMsg: 'Register successful',
                        User: user
                    };
                    res.render('account/register', vm);

                // }, 1500);

            });
        }
    });

});

router.post('/login', (req, res) => {
    var user = {
        username: req.body.account,
        password: SHA256(req.body.password).toString()
    };

    accountRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.user = rows[0];
            //req.session.cart = [];

            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);

        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed'
            };
            res.render('account/login', vm);
        }
    });
});

router.get('/logout', (req, res) => {
    req.session.isLogged = false;
    req.session.user = null;
    req.session.cart = [];
    res.redirect(req.headers.referer);
});

module.exports = router;
