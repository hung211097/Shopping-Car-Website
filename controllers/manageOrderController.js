var moment = require('moment');
var restrict = require('../middle-wares/restrictAdmin');
var express = require('express');
var manageOrderRepo = require('../repos/manageOrderRepo');
var config = require('../config/config');
var router = express.Router();

var isEd = false;
router.get('/', restrict, (req, res) => {
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
    var isFirstPage = false,
    isLastPage = false;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = manageOrderRepo.loadAllOrder(offset);
  var p2 = manageOrderRepo.countOrder();
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
            {
              rows[i].NgayDat = moment(rows[i].NgayDat).format("DD/MM/YYYY HH:mm:ss");
            }

        var vm = {
            products: rows,
            noProducts: rows.length === 0,
            page_numbers: numbers,
            layout: 'layoutAdmin.handlebars',
            last_page: nPages,
            isEdit: isEd,
            isFirst: isFirstPage,
            isLast: isLastPage
        };

        for (var i = 0; i < numbers.length; i++)
          if (numbers[i].isCurPage == true) {
            vm.CurrentPage = numbers[i].value;
            break;
          }

        if(isEd)
          isEd = false;
    res.render('admin/manageOrder', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/view', restrict, (req, res) => {
  req.query.ngay = moment(req.query.ngay, 'DD/MM/YYYY HH:mm:ss')
        .format('YYYY-MM-DD HH:mm:ss');
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
    var isFirstPage = false,
    isLastPage = false;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = manageOrderRepo.loadAllViewOneOrder(req.query.ma, req.query.ngay, offset);
  var p2 = manageOrderRepo.countViewOneOrder(req.query.ma, req.query.ngay);
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
              rows[i].NgayDat = moment(rows[i].NgayDat).format("DD/MM/YYYY HH:mm:ss");

        var vm = {
            Ngay: rows[0].NgayDat,
            Khach: rows[0].Name,
            products: rows,
            page_numbers: numbers,
            layout: 'layoutAdmin.handlebars',
            last_page: nPages,
            isFirst: isFirstPage,
            isLast: isLastPage
        };
        for (var i = 0; i < numbers.length; i++)
          if (numbers[i].isCurPage == true) {
            vm.CurrentPage = numbers[i].value;
            break;
          }
        res.render('admin/viewOrder', vm);
    }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/edit', restrict, (req, res) => {
  req.query.ngay = moment(req.query.ngay, 'DD/MM/YYYY HH:mm:ss')
        .format('YYYY-MM-DD HH:mm:ss');
  var p1 = manageOrderRepo.single(req.query.ma, req.query.ngay);
  var p2 = manageOrderRepo.loadAllStatus();
  Promise.all([p1, p2]).then(([row, rowsStatus])=> {
    var isSSelect = row.TinhTrang;
    for (var i = 0; i < rowsStatus.length; i++) 
    {
      if (rowsStatus[i].MaTinhTrang === isSSelect)
        rowsStatus[i].flag = true;
      else
        rowsStatus[i].flag = false;
    }
    row.NgayDat = moment(row.NgayDat).format("DD/MM/YYYY HH:mm:ss");
    var vm = {
      product: row,
      products1: rowsStatus,
      noProducts1: rowsStatus.length === 0,
      layout: 'layoutAdmin.handlebars'
    };
    res.render('admin/editOrder', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/edit', (req, res) => {
  req.body.NgayDat = moment(req.body.NgayDat, 'DD/MM/YYYY HH:mm:ss')
        .format('YYYY-MM-DD HH:mm:ss');
  console.log(req.body);
  manageOrderRepo.update(req.body).then(value => {
    isEd = true;
    res.redirect('/manageOrder');
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

module.exports = router;
