var restrict = require('../middle-wares/restrictAdmin');
var express = require('express');
// var adminRepo = require('../repos/adminRepo.js');
// var config = require('../config/config');
var router = express.Router();

router.get('/', restrict, (req, res) => {
        var vm = {
            layout: 'layoutAdmin.handlebars'
        };
    res.render('admin/dashboard', vm);
});

router.get('/info', restrict, (req, res) => {
        var vm = {
            layout: 'layoutAdmin.handlebars'
        };
    res.render('admin/adminInfo', vm);
});
module.exports = router;
