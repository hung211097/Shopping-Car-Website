var express = require('express');
var restrict = require('../middle-wares/restrictAdmin');
var manageManufacturerRepo = require('../repos/manageManufacturerRepo');
var manageCarRepo = require('../repos/manageCarRepo');
var config = require('../config/config');
var multer = require('multer');
var mkdirp = require('mkdirp');
var fs = require('fs');
var router = express.Router();

const tempContain = './public/image/temp/';
const newContain = './public/image/logo/';
const pathToImage = '/image/logo/';
var storage = multer.diskStorage({
  destination: function(req, file, cb) {

    const dir = './public/image/temp';
    mkdirp(dir, err => cb(err, dir))
  },
  filename: function(req, file, cb) {
    var name = file.originalname;
    cb(null, name);
  }
})

var upload = multer({
  storage: storage
});

var isAd = false;
var isEd = false;
var isDel = false;
var isDelFalse = false;
router.get('/', restrict, (req, res) => {
  var page = req.query.page;
  if (!page) {
      page = 1;
    }
    var isFirstPage = false,
    isLastPage = false;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE_ADMIN;
  var p1 = manageManufacturerRepo.loadAllManufacturer(offset);
  var p2 = manageManufacturerRepo.countManufacturer();
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
        if(isDel)
          isDel = false;
        if(isDelFalse)
          isDelFalse = false;
    res.render('admin/manageManufacturer', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/add', restrict, (req, res) => {
  var p1 = manageManufacturerRepo.loadAllManufacturerNoOffset().then(rowsManufacturer => {
    var maHangXeTangDan;
    var temp = [];
    for (var i = 0; i < rowsManufacturer.length; i++)
    {
      var num = rowsManufacturer[i].MaHangXe.split("H");
      num = parseInt(num[1]);
      temp.push(num);
    }
    if (rowsManufacturer.length === 0)
    {
      maHangXeTangDan = 1;
    }
    else if (parseInt(temp[0]) == 2)
      maHangXeTangDan = 1;
    else
    {
      for (var i = 0; i < temp.length; i++)
      {
        if (i === (temp.length - 1))
        {

          maHangXeTangDan = rowsManufacturer.length + 1;
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
            maHangXeTangDan = 1;
            break;
          }
          if ((numCurr + 1) < numNext)
          {
            maHangXeTangDan = numCurr + 1;
            break;
          }
        }
      }
    }
    if (1 <= maHangXeTangDan && maHangXeTangDan <= 9)
      maHangXeTangDan = "H0" + maHangXeTangDan;
    else if (10 <= maHangXeTangDan)
      maHangXeTangDan = "H" + maHangXeTangDan;
    var vm = {
      maTangDan: maHangXeTangDan,
      isAdd: isAd,
      layout: 'layoutAdmin.handlebars'
    }
    if(isAd)
          isAd = false;
    res.render('admin/addManufacturer', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/add', upload.single('photos'), (req, res) => {
  var file = req.file;
  var name = req.body.MaHangXe;
    var currentPath = file.path;
    var extension = file.filename.substr(file.filename.indexOf('.'));
    var renameFile_path = newContain + name + extension;

    fs.rename(currentPath, renameFile_path, function(err) {
      if (err) throw err;
      // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
      fs.unlink(currentPath, function() {
        if (err) throw err;
      });
    });

  req.body.DuongDan = pathToImage + name + extension;
  manageManufacturerRepo.add(req.body).then(value => {
    isAd = true;
    res.redirect('/manageManufacturer/add');
  }).catch(err => {
    res.render('error/index', {layout: false});
  });

});

router.get('/edit', restrict, (req, res) => {
    manageManufacturerRepo.single(req.query.ma).then(row => {
        var vm = {
            product: row,
            layout: 'layoutAdmin.handlebars'
        };
        res.render('admin/editManufacturer', vm);
    }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/edit', (req, res) => {
    manageManufacturerRepo.update(req.body).then(value => {
        isEd = true;
        res.redirect('/manageManufacturer');
    }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/delete', (req, res) => {
  var p1 = manageCarRepo.loadAllCarNoOffset().then(rowsCar => {
    for (var i = 0; i < rowsCar.length; i++) {
      if (rowsCar[i].HangXe === req.body.MaHangXe)
      {
        isDelFalse = true;
        res.redirect('/manageManufacturer');
        return;
      }
    }
    manageManufacturerRepo.delete(req.body.MaHangXe).then(value => {
        isDel = true;
        res.redirect('/manageManufacturer');
    });
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

module.exports = router;
