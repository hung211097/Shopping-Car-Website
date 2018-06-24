var express = require('express'),
    SHA256 = require('crypto-js/sha256');

var accountRepo = require('../repos/accountRepo');

var router = express.Router();

router.get('/register', (req, res) => {
    res.render('account/register');
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

router.post('/register', (req, res) => {

    var user = {
        username: req.body.SUID,
        password: SHA256(req.body.SUPass).toString(),
        name: req.body.SUHoTen,
        email: req.body.SUEmail
    };

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
                res.redirect('/');
            });
        }
    });
    
});


module.exports = router;