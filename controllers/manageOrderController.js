var moment = require('moment');
var express = require('express');
var manageCarRepo = require('../repos/manageCarRepo');
var manageKindOfCarRepo = require('../repos/manageKindOfCarRepo');
var manageManufacturerRepo = require('../repos/manageManufacturerRepo');
var config = require('../config/config');
var router = express.Router();

var isEd = false;
var isAd = false;
var isDel = false;
var isDelFalse = false;
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
      isAdd: isAd,
      layout: 'layoutAdmin.handlebars'
    }
    if(isAd)
          isAd = false;
    res.render('admin/addCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});





router.post('/add', upload.array('photos'), (req, res) => {

  var files = req.files;
  var name = req.body.MaXe;

  var des = req.body.MoTa;

  var dir = newContain + name;
  mkdirp(dir, err => {
    if (err) {
      throw err;
    }
  });

  for (var i = 0; i < files.length; i++) {
    var currentPath = files[i].path;
    var extension = '.jpg'
    var renameFile_path = dir + '/' + name + '_' + count++ + extension;

    fs.rename(currentPath, renameFile_path, function(err) {
      if (err) throw err;
      // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
      fs.unlink(currentPath, function() {
        if (err) throw err;
      });
    });

  }
  var temp = CountAppearance(des, '</p>');
  if (temp === 1)
  {
    var img = `<p><img src="`+ pathToImage + name + `/` + name + `_2` + extension + `" onerror="this.parentNode.style.display=\\'none\\'"/></p>`;
    des = ReplaceNthChar(des, '</p>', parseInt(temp), img);
    console.log(img);
    console.log(des);
  }
  else
  {
    var img = `<p><img src="`+ pathToImage + name + `/` + name + `_2` + extension + `" onerror="this.parentNode.style.display=\\'none\\'"/></p>`;
    des = ReplaceNthChar(des, '</p>', parseInt(temp / 2), img);

    temp = CountAppearance(des, '</p>');
    img = `<p><img src="`+ pathToImage + name + `/` + name + `_3` + extension + `" onerror="this.parentNode.style.display=\\'none\\'"/></p>`;
    des = ReplaceNthChar(des, '</p>', temp, img);
  }
  
  req.body.MoTa = des;
  req.body.NgayNhan = moment(req.body.NgayNhan, 'DD/MM/YYYY')
        .format('YYYY-MM-DD');

  manageCarRepo.add(req.body).then(value => {
    isAd = true;
    res.redirect('/manageCar/add');
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
  
  count = 1;
});

function ReplaceNthChar(string, character, n, replace){
  var count= 0, i=0;
  while(count<n && (i=string.indexOf(character,i)+1)){
    count++;
  }
  if(count== n)
    string = string.substr(0, i + character.length - 1) + replace + string.substr(i + character.length - 1);
  return string;
}

function CountAppearance(string, character){
  var count= 0, i=0;
  while((i=string.indexOf(character,i)+1)){
    count++;
  }
  return count;
}

router.get('/edit', (req, res) => {
  var p1 = manageCarRepo.single(req.query.ma);
  var p2 = manageManufacturerRepo.loadAllManufacturerNoOffset();
  var p3 = manageKindOfCarRepo.loadAllKindOfCarNoOffset();
  Promise.all([p1, p2, p3]).then(([row, rowsManufacturer, rowsKindOfcar])=> {
    row.NgayNhan = moment(row.NgayNhan).format("DD/MM/YYYY");
    var isMSelect = row.TenHangXe;
    var isKSelect = row.TenDongXe;
    for (var i = 0; i < rowsManufacturer.length; i++) 
    {
      if (rowsManufacturer[i].TenHangXe === isMSelect)
        rowsManufacturer[i].flag = true;
      else
        rowsManufacturer[i].flag = false;
    }
    for (var i = 0; i < rowsKindOfcar.length; i++) 
    {
      if (rowsKindOfcar[i].TenDongXe === isKSelect)
        rowsKindOfcar[i].flag = true;
      else
        rowsKindOfcar[i].flag = false;
    }
    var vm = {
      product: row,
      products1: rowsManufacturer,
      noProducts1: rowsManufacturer.length === 0,
      products2: rowsKindOfcar,
      noProducts2: rowsKindOfcar.length === 0,
      layout: 'layoutAdmin.handlebars'
    };
    res.render('admin/editCar', vm);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.post('/edit', (req, res) => {
  req.body.NgayNhan = moment(req.body.NgayNhan, 'DD/MM/YYYY')
  .format('YYYY-MM-DD');
  manageCarRepo.update(req.body).then(value => {
    isEd = true;
    res.redirect('/manageCar');
  });
});

router.post('/delete', (req, res) => {
    manageCarRepo.delete(req.body.MaXe).then(value => {
        isDel = true;
        res.redirect('/manageCar');
    });
});

module.exports = router;