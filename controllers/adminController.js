var express = require('express');
// var adminRepo = require('../repos/adminRepo.js');
// var config = require('../config/config');
var router = express.Router();

router.get('/', (req, res) => {
        var vm = {
            layout: 'layoutAdmin.handlebars'
        };
    res.render('admin/dashboard', vm);
});
module.exports = router;
