var express = require('express');
var homeRepo = require('../repos/homeRepo');
var router = express.Router();

router.get('/', (req, res) => {
  var p1 = homeRepo.loadTopSeen();
  var p2 = homeRepo.loadTopSell();
  var p3 = homeRepo.loadTopNew();

  Promise.all([p1, p2, p3]).then(([seenRows, sellRows, newRows]) => {
    // var isPurchase = req.session.buy
    // req.session.buy = false;

    var productsData = {
      topSeen: seenRows,
      topSell: sellRows,
      topNew: newRows,
    };
    res.render('home/index', productsData);
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
