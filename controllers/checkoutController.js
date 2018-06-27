var express = require('express');
var cartRepo = require('../repos/cartRepo'),
  productRepo = require('../repos/productsRepo'),
  checkoutRepo = require('../repos/checkoutRepo');
var homeRepo = require('../repos/homeRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();
const FreeShip = 1000000000;
router.get('/', restrict, (req, res) => {

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
        if(pro.Gia > FreeShip)
          Fee[0].PhiVanChuyen = 0;
        pro.index = i;
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

router.post('/', restrict, (req, res) => {
    var currentdate = new Date(); 
    var datetime = '' + currentdate.getFullYear() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getDate()+ " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    var dem = 0;
    for(var i = 0; i < req.session.cart.length; i++)
            dem += req.session.cart[i].Quantity;
        
    var hoaDon = {
        KhachHang: req.session.user.Username,
        NgayDat: datetime,
        TongTien: req.body.TotalPrice,
        SDT: req.body.phone,
        GhiChu: req.body.note,
        DiaChi: req.body.address,
        SoLuongXe: dem
    }
    
    checkoutRepo.addHoaDon(hoaDon);
    
    for(var i = 0; i < req.session.cart.length; i++)
    {
        var chitiethoadon = {
            KhachHang: req.session.user.Username,
            NgayDat: datetime,
            MaXe: req.session.cart[i].ProId,
            SoLuong: req.session.cart[i].Quantity
        }
        
        checkoutRepo.addCtHoaDon(chitiethoadon);
        checkoutRepo.decreaseCar(chitiethoadon);
    }
    
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
          if(pro.Gia > FreeShip)
            Fee[0].PhiVanChuyen = 0;
          pro.index = i;
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
