var moment = require('moment');
var express = require('express');
var manageCarRepo = require('../repos/manageCarRepo');
var manageKindOfCarRepo = require('../repos/manageKindOfCarRepo');
var manageManufacturerRepo = require('../repos/manageManufacturerRepo');
var config = require('../config/config');
var router = express.Router();

var isDel = false;
router.get('/', (req, res) => {
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
    var isFirstPage = false,
    isLastPage = false;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = manageCarRepo.loadAllCar(offset);
  var p2 = manageCarRepo.countCar();
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

        for (var i = 0; i < rows.length; i++)
          rows[i].NgayNhan = moment(rows[i].NgayNhan).format("DD/MM/YYYY");

        var vm = {
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers,
            layout: 'layoutAdmin.handlebars',
            last_page: nPages,
            isDelete: isDel,
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
    res.render('admin/manageCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/add', (req, res) => {
  var p1 = manageManufacturerRepo.loadAllManufacturerNoOffset();
  var p2 = manageKindOfCarRepo.loadAllKindOfCarNoOffset();
  var p3 = manageCarRepo.loadAllCarNoOffset();
  Promise.all([p1, p2, p3]).then(([rowsManufacturer, rowsKindOfcar, rowsCar])=> {
    var maXeTangDan;
    var temp = [];
    for (var i = 0; i < rowsCar.length; i++)
    {
      var num = rowsCar[i].MaXe.split("X");
      num = parseInt(num[1]);
      temp.push(num);
    }
    if (rowsCar.length === 0)
    {
      maXeTangDan = 1;
    }
    else
    {
      for (var i = 0; i < temp.length; i++)
      {
        if (i === (temp.length - 1))
        {
          maXeTangDan = rowsCar.length + 1;
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
            maXeTangDan = 1;
            break;
          }
          if ((numCurr + 1) < numNext)
          {
            maXeTangDan = numCurr + 1;
            break;
          }
        }
      }
    }
    if (1 <= maXeTangDan && maXeTangDan <= 9)
      maXeTangDan = "X00" + maXeTangDan;
    else if (10 <= maXeTangDan && maXeTangDan <= 99)
      maXeTangDan = "X0" + maXeTangDan;
    else if (100 <= maXeTangDan)
      maXeTangDan = "X" + maXeTangDan;
    var vm = {
      products1: rowsManufacturer,
      noProducts1: rowsManufacturer.length === 0,
      products2: rowsKindOfcar,
      noProducts2: rowsKindOfcar.length === 0,
      maTangDan: maXeTangDan,
      layout: 'layoutAdmin.handlebars'
    }
    res.render('admin/addCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/delete', (req, res) => {
    manageCarRepo.delete(req.body.MaXe).then(value => {
        isDel = true;
        res.redirect('/manageCar');
    });
});

module.exports = router;
