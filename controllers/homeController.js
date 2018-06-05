var express = require('express');
var homeRepo = require('../repos/homeRepo');
var router = express.Router();

router.get('/', (req, res) => {
  var p1 = homeRepo.loadTopSeen();
  var p2 = homeRepo.loadTopSell();
  var p3 = homeRepo.loadTopNew();
  var p4 = homeRepo.loadTopNSX();
  var p5 = homeRepo.loadTopType();
  Promise.all([p1, p2, p3, p4, p5]).then(([seenRows, sellRows, newRows, NSXRows, TypeRows]) => {
    var productsData = {
      topSeen: seenRows,
      topSell: sellRows,
      topNew: newRows,
      topNSX: NSXRows,
      topType: TypeRows
    };
    res.render('home/index', productsData);
  }).catch(err => {
    res.send({
      Error: '404',
      message: err
    });
  });
});

router.get('/about', (req, res) => {
  var p1 = homeRepo.loadTopNSX();
  var p2 = homeRepo.loadTopType();
  Promise.all([p1, p2]).then(([NSXRows, TypeRows]) => {
    var productsData = {
      topNSX: NSXRows,
      topType: TypeRows
    };
    res.render('home/about', productsData);
  }).catch(err => {
    res.send({
      Error: '404',
      message: err
    });
  });
});

router.get('/policy', (req, res) => {
  var p1 = homeRepo.loadTopNSX();
  var p2 = homeRepo.loadTopType();
  Promise.all([p1, p2]).then(([NSXRows, TypeRows]) => {
    var productsData = {
      topNSX: NSXRows,
      topType: TypeRows
    };
    res.render('home/policy', productsData);
  }).catch(err => {
    res.send({
      Error: '404',
      message: err
    });
  });
});

router.get('/service', (req, res) => {
  var p1 = homeRepo.loadTopNSX();
  var p2 = homeRepo.loadTopType();
  Promise.all([p1, p2]).then(([NSXRows, TypeRows]) => {
    var productsData = {
      topNSX: NSXRows,
      topType: TypeRows
    };
    res.render('home/service', productsData);
  }).catch(err => {
    res.send({
      Error: '404',
      message: err
    });
  });
});

router.get('/contact', (req, res) => {
  var p1 = homeRepo.loadTopNSX();
  var p2 = homeRepo.loadTopType();
  Promise.all([p1, p2]).then(([NSXRows, TypeRows]) => {
    var productsData = {
      topNSX: NSXRows,
      topType: TypeRows
    };
    res.render('home/contact', productsData);
  }).catch(err => {
    res.send({
      Error: '404',
      message: err
    });
  });
});

router.get('/cart', (req, res) => {
  res.render('home/cart');
});

module.exports = router;
