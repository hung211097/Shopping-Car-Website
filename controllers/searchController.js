var express = require('express');
var homeRepo = require('../repos/homeRepo');
var searchRepo = require('../repos/searchRepo');
var config = require('../config/config');
var extra_Array = require('../extra_array/exArr');

var router = express.Router();

router.get('/', (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }

  var key = req.query.keyword;
  var p = req.query.price;
  var b = req.query.brand;
  var t = req.query.type;
  if (!p)
    p = "default";
  if (!b)
    b = "default";
  if (!t)
    t = "default";

  var isFirstPage = false,
    isLastPage = false;
  var isKey = false;
  var isDefaultNSX = false, isDefaultCate = false;
  if(b == "default")
    isDefaultNSX = true;
  if(t == "default")
    isDefaultCate = true;

  var SearchPrice = extra_Array.Price;

  var arrPrice = [],
    arrBrand = [],
    arrType = [];

  var offset = (page - 1) * config.PRODUCTS_PER_SEARCHPAGE;

  if (key == "") {
    var p1 = searchRepo.loadAll(offset, p, b, t);
    var p2 = searchRepo.countAll(p, b, t);
  } else {
    var p1 = searchRepo.loadKeyword(key, offset, p, b, t);
    var p2 = searchRepo.countKeyword(key, p, b ,t);
    isKey = true;
  }

  var p3 = homeRepo.loadAllNSX();
  var p4 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4]).then(([pRows, countRows, AllNSXRows, AllTypeRows]) => {
    var total = countRows[0].total;
    var nPages = parseInt(total / config.PRODUCTS_PER_SEARCHPAGE);
    if (total % config.PRODUCTS_PER_SEARCHPAGE > 0) {
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
            isSearch: isKey,
            Key: key,
            price: p,
            brand: b,
            type: t
          });
      else if (+page === nPages)
        for (var i = nPages - 2; i <= nPages; i++)
          numbers.push({
            value: i,
            isCurPage: i === +page,
            isSearch: isKey,
            Key: key,
            price: p,
            brand: b,
            type: t
          });
      else {
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
      }
    } else if (nPages < 2) {
      isFirstPage = true;
      isLastPage = true;
      numbers.push({
        value: +page,
        isCurPage: true,
        isSearch: isKey,
        Key: key,
        price: p,
        brand: b,
        type: t
      });
    } else {
      if (+page === 1) {
        isFirstPage = true;
        isLastPage = false;
        numbers.push({
          value: +page,
          isCurPage: true,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
      } else {
        isFirstPage = false;
        isLastPage = true;
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          isSearch: isKey,
          Key: key,
          price: p,
          brand: b,
          type: t
        });
      }
    }

    for (var i = 0; i < SearchPrice.length; i++)
      arrPrice.push({
        valuePrice: SearchPrice[i].value,
        namePrice: SearchPrice[i].name,
        isPrice: p === SearchPrice[i].value
      });

    for (var i = 0; i < AllNSXRows.length; i++)
      arrBrand.push({
        valueBrand: AllNSXRows[i].TenHangXe,
        nameBrand: AllNSXRows[i].TenHangXe,
        isBrand: b === AllNSXRows[i].TenHangXe
      });

    for (var i = 0; i < AllTypeRows.length; i++)
      arrType.push({
        valueType: AllTypeRows[i].TenDongXe,
        nameType: AllTypeRows[i].TenDongXe,
        isType: t === AllTypeRows[i].TenDongXe
      });

// -------------------------------------------
    var vm = {
      products: pRows,
      totalItem: total,
      noProducts: pRows.length === 0,
      page_numbers: numbers,
      last_page: nPages,
      isFirst: isFirstPage,
      isLast: isLastPage,
      AllNSX: AllNSXRows,
      AllType: AllTypeRows,
      searchPrice: arrPrice,
      searchBrand: arrBrand,
      searchType: arrType,
      isSearch: isKey,
      price: p,
      brand: b,
      type: t,
      isDefaultBrand: isDefaultNSX,
      isDefaultType: isDefaultCate
    };

    if (key)
      vm.Key = key;

    res.render('search/index', vm);
  });
});

router.post('/', (req, res) => {
  var find = req.body.search;
  var findCollapse = req.body.searchCollapse;
  var query = req.body.queryInput;

  var searchMain;
  if (!find && !findCollapse && !query)
    searchMain = "";
  else {
    if (!find && !query)
      searchMain = findCollapse;
    else if (!findCollapse && !query)
      searchMain = find;
    else
      searchMain = query;
  }

  var p = req.body.SearchWithPrice;
  var b = req.body.SearchWithBrand;
  var t = req.body.SearchWithType;
  if (p && b && t)
    res.redirect('/search?keyword=' + searchMain + '&price=' + p + '&brand=' + b + '&type=' + t);
  else
    res.redirect('/search?keyword=' + searchMain);
});
module.exports = router;
