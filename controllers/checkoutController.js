var express = require('express');
var cartRepo = require('../repos/cartRepo'),
  productRepo = require('../repos/productsRepo'),
  checkoutRepo = require('../repos/checkoutRepo');
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
  checkoutRepo.loadShipFee().then(Fee => {
    Promise.all(arr_p).then((result) => {
      for (var i = 0; i < result.length; i++) {
        var pro = result[i][0];
        pro.Quantity = req.session.cart[i].Quantity;
        pro.Amount = pro.Gia * req.session.cart[i].Quantity;

        items.push(pro);
      }

      var total = 0;
      for (var i = 0; i < items.length; i++)
        total += items[i].Amount;
      var vm = {
        items: items,
        tempTotal: total,
        fee: Fee[0].PhiVanChuyen,
        Total: Fee[0].PhiVanChuyen + total,
        isScroll: items.length === 5,
        layout: 'checkoutLayout.handlebars'
      };
      res.render('checkout/index', vm);
    });
  });
});


module.exports = router;
