var express = require('express');
var cartRepo = require('../repos/cartRepo'),
  productRepo = require('../repos/productsRepo');
var homeRepo = require('../repos/homeRepo');

var router = express.Router();

router.get('/', (req, res) => {

  var arr_p = [];
  for (var i = 0; i < req.session.cart.length; i++) {
    var cartItem = req.session.cart[i];
    var p = productRepo.single(cartItem.ProId);
    arr_p.push(p);
  }

  var items = [];

  Promise.all(arr_p).then((result) => {
    for (var i = 0; i < result.length; i++) {
      var pro = result[i][0];
      pro.Quantity = req.session.cart[i].Quantity;
      pro.Amount = pro.Gia * req.session.cart[i].Quantity;
      // var item = {
      //   Product: pro
      //   // Quantity: req.session.cart[i].Quantity,
      //   // Amount: pro.Gia * req.session.cart[i].Quantity
      // };
      items.push(pro);
    }

    var total = 0;
    for (var i = 0; i < items.length; i++)
      total += items[i].Amount;
    var vm = {
      items: items,
      isEmpty: items.length === 0,
      Total: total
    };
    // console.log(vm);
    res.render('cart/index', vm);
  });

});

router.post('/add', (req, res) => {
  var item = {
    ProId: req.body.proId,
    Quantity: +req.body.quantity
  };

  productRepo.single(req.body.proId).then(result => {
    var car = result[0];
    var bought = 0;
    for (var i = 0; i < req.session.cart.length; i++)
      if (req.session.cart[i].ProId == item.ProId) {
        bought = req.session.cart[i].Quantity;
        break;
      }
    if (car.SoLuongTon - item.Quantity - bought < 0)
      res.sendStatus(400);
    else {
      cartRepo.add(req.session.cart, item);

      res.send({
        success: 'Success'
      });
    }
  });
});

router.post('/decrease', (req, res) => {
  var item = {
    ProId: req.body.proId,
    Quantity: +req.body.quantity
  };

  cartRepo.decrease(req.session.cart, item);

  res.send({
    success: 'Success'
  });

});

router.post('/remove', (req, res) => {
  cartRepo.remove(req.session.cart, req.body.proId);
  var isEmpty = false;
  if(req.session.cart.length == 0)
    isEmpty = true;
  res.send({
    success: 'Success',
    empty: isEmpty
  });

  // res.redirect(req.headers.referer);
});

module.exports = router;
