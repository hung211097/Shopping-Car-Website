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
  res.render('admin/loginAdmin', vm);
});

router.post('/', (req, res) => {
    var user = {
        username: req.body.Username,
        password: SHA256(req.body.Password).toString()
    };

    accountAdminRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isAdminLogged = true;
            req.session.admin = rows[0];
            //req.session.cart = [];

            var url = '/dashboard';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);

        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed',
                layout: 'layoutLoginAdmin.handlebars'
            };
            res.render('admin/loginAdmin', vm);
        }
    });
});

router.get('/logout', (req, res) => {
    req.session.isAdminLogged = false;
    req.session.admin = null;
    res.redirect(req.headers.referer);
});

module.exports = router;
