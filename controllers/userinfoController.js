var express = require('express');
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

module.exports = router;