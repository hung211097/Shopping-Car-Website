var express = require('express');
var manageKindOfCarRepo = require('../repos/manageKindOfCarRepo');
var manageCarRepo = require('../repos/manageCarRepo');
var config = require('../config/config');
var router = express.Router();

var isDel = false;
var isDelFalse = false
router.get('/', (req, res) => {
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
    var isFirstPage = false,
    isLastPage = false;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = manageKindOfCarRepo.loadAllKindOfCar(offset);
  var p2 = manageKindOfCarRepo.countKindOfCar();
  Promise.all([p1, p2]).then(([rows, countRows])=> {
    var total = countRows[0].total;
        var nPages = parseInt(total / config.PRODUCTS_PER_PAGE_ADMIN);
        if (total % config.PRODUCTS_PER_PAGE_ADMIN > 0) {
            nPages++;
        }

        if (+page === 1)
          isFirstPage = true;
        if (+page === nPages)
          isLastPage = true;

        var numbers = [];
        if (nPages > 2) {
          if (+page === 1)
            for (var i = 1; i <= 3; i++)
              numbers.push({
                value: i,
                isCurPage: i === +page,
              });
            else if (+page === nPages)
              for (var i = nPages - 2; i <= nPages; i++)
                numbers.push({
                  value: i,
                  isCurPage: i === +page
                });
              else {
                numbers.push({
                  value: +page - 1,
                  isCurPage: false
                });
                numbers.push({
                  value: +page,
                  isCurPage: true
                });
                numbers.push({
                  value: +page + 1,
                  isCurPage: false
                });
              }
            } else if (nPages < 2) {
              isFirstPage = true;
              isLastPage = true;
              numbers.push({
                value: +page,
                isCurPage: true
              });
            } else {
              if (+page === 1) {
                isFirstPage = true;
                isLastPage = false;
                numbers.push({
                  value: +page,
                  isCurPage: true
                });
                numbers.push({
                  value: +page + 1,
                  isCurPage: false
                });
              } else {
                isFirstPage = false;
                isLastPage = true;
                numbers.push({
                  value: +page - 1,
                  isCurPage: false
                });
                numbers.push({
                  value: +page,
                  isCurPage: true
                });
              }
            }

        var vm = {
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers,
            layout: 'layoutAdmin.handlebars',
            last_page: nPages,
            isDelete: isDel,
            isDeleteFalse: isDelFalse,
            isFirst: isFirstPage,
            isLast: isLastPage
        };

        for (var i = 0; i < numbers.length; i++)
          if (numbers[i].isCurPage == true) {
            vm.CurrentPage = numbers[i].value;
            break;
          }

        if(isDel)
          isDel = false;
        if(isDelFalse)
          isDelFalse = false;
    res.render('admin/manageKindOfCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/add', (req, res) => {
  var p1 = manageKindOfCarRepo.loadAllKindOfCarNoOffset().then(rowsKindOfcar => {
    var maDongXeTangDan;
    var temp = [];
    for (var i = 0; i < rowsKindOfcar.length; i++)
    {
      var num = rowsKindOfcar[i].MaDongXe.split("T");
      num = parseInt(num[1]);
      temp.push(num);
    }
    if (rowsKindOfcar.length === 0)
    {
      maDongXeTangDan = 1;
    }
    else
    {
      for (var i = 0; i < temp.length; i++)
      {
        if (i === (temp.length - 1))
        {

          maDongXeTangDan = rowsKindOfcar.length + 1;
          break;
        }
        else
        {
          var numCurr = parseInt(temp[i]);
          var numNext = parseInt(temp[i + 1]);
          if ((numCurr - 1) > 1)
          {
            if ((numCurr -1) === parseInt(temp[i - 1]))
              continue;
            maDongXeTangDan = 1;
            break;
          }
          if ((numCurr + 1) < numNext)
          {
            maDongXeTangDan = numCurr + 1;
            break;
          }
        }
      }
    }
    if (1 <= maDongXeTangDan && maDongXeTangDan <= 9)
      maDongXeTangDan = "T0" + maDongXeTangDan;
    else if (10 <= maDongXeTangDan)
      maDongXeTangDan = "T" + maDongXeTangDan;
    var vm = {
      maTangDan: maDongXeTangDan,
      layout: 'layoutAdmin.handlebars'
    }
    res.render('admin/addKindOfCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/delete', (req, res) => {
  var p1 = manageCarRepo.loadAllCarNoOffset().then(rowsCar => {
    for (var i = 0; i < rowsCar.length; i++) {
      if (rowsCar[i].DongXe === req.body.MaDongXe)
      {
        isDelFalse = true;
        res.redirect('/manageKindOfCar');
        return;
      }
    }
    manageKindOfCarsRepo.delete(req.body.MaDongXe).then(value => {
        isDel = true;
        res.redirect('/manageKindOfCar');
    });
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

module.exports = router;
