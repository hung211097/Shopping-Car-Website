var express = require('express'),
    SHA256 = require('crypto-js/sha256');
var restrict = require('../middle-wares/restrict');
var router = express.Router();

var userinfoRepo = require('../repos/userinfoRepo');

router.get('/', restrict, (req, res) => {
    res.render('UserInfo/index');
});

router.post('/EditName', restrict, (req, res) => {
    var user = req.session.user;
    
    user.Name = req.body.Name;
    
    userinfoRepo.updateName(user);
    res.redirect('/UserInfo/');
});

router.post('/', restrict, (req, res) => {
    var user = req.session.user;
    var vm = {
                showChange: true,
                isChange: true,
                errorMsg: 'Change password failed'
            };
            
    var pass = SHA256(req.body.NewPass).toString();
    
    if (user.Password === SHA256(req.body.OldPass).toString())
    {
        user.Password = pass;

        userinfoRepo.updatePass(user);
    }
    else
    {
        vm.isChange = false;
    }
    res.render('UserInfo/index',vm);
});

router.post('/EditEmail', restrict, (req, res) => {
    var user = req.session.user;
    
    user.Email = req.body.NewEmail;
    
    userinfoRepo.updateEmail(user);
    res.redirect('/UserInfo/');
});

module.exports = router;