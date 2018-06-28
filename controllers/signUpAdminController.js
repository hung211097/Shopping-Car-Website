var express = require('express'),
    SHA256 = require('crypto-js/sha256');
var accountAdminRepo = require('../repos/accountAdminRepo');
var config = require('../config/config');
var router = express.Router();

var isEd = false;
router.get('/', (req, res) => {
  var vm = {
    layout: 'layoutLoginAdmin.handlebars'
  }
  res.render('admin/signUpAdmin', vm);
  });

router.post('/', (req, res) => {

    var user = {
        username: req.body.Username,
        password: SHA256(req.body.Password).toString(),
        name: req.body.Name,
        email: req.body.Email
    };

    var userLogin = {
        Username: req.body.Username,
        Password: SHA256(req.body.Password).toString(),
        Name: req.body.Name,
        Email: req.body.Email
    }
    accountAdminRepo.exist(user).then(rows => {
        if (rows.length > 0)
        {
            var vm = {
                showError: true,
                errorMsg: 'Register failed',
                User: user,
                layout: 'layoutLoginAdmin.handlebars'
            };
            res.render('admin/signUpAdmin', vm);
        }
        else
        {            
            accountAdminRepo.add(user).then(value => {
                setTimeout(function() {
                    console.log('Register successful');
                    req.session.isAdminLogged = true;
//                    accountRepo.login(user).then(row => {
//                        if (row.length > 0){
//                            console.log(row[0]);
                            req.session.admin = userLogin;
//                        }
//                        else
//                        {
//                           console.log('error');
//                        }
//                    });
                    //req.session.cart = [];
                    res.redirect('/dashboard');
                }, 1500);
            });
        }
    });
    
});


module.exports = router;
