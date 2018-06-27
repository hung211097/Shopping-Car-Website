var moment = require('moment');
var express = require('express');
var manageOrderRepo = require('../repos/manageOrderRepo');
var config = require('../config/config');
var router = express.Router();

var isEd = false;
router.get('/', (req, res) => {
  var vm = {
    layout: 'layoutLoginAdmin.handlebars'
  }
  res.render('admin/loginAdmin', vm);
  });

module.exports = router;
