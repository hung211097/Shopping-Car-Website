var express = require('express');
var adminRepo = require('../repos/adminRepo.js');
var config = require('../config/config');
var router = express.Router();

router.get('/manage_car', (req, res) => {
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = adminRepo.loadAllCar(offset);
  var p2 = adminRepo.countCar();
  Promise.all([p1, p2]).then(([rows, countRows])=> {
    var total = countRows[0].total;
        var nPages = total / config.PRODUCTS_PER_PAGE_ADMIN;
        if (total % config.PRODUCTS_PER_PAGE_ADMIN > 0) {
            nPages++;
        }

        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }
        var vm = {
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers,
            layout: 'layoutAdmin.handlebars'
        };
    res.render('admin/manage_car', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/policy', (req, res) => {
  res.render('home/policy');
});

router.get('/service', (req, res) => {
  res.render('home/service');
});

router.get('/contact', (req, res) => {
  res.render('home/contact');
});

module.exports = router;
