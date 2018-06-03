var express = require('express');
var homeRepo = require('../repos/homeRepo');
var productRepo = require('../repos/productsRepo');
var config = require('../config/config');

var router = express.Router();

router.get('/', (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }

  var isFirstPage = false,
    isLastPage = false;
  var isNSX = false,
    isType = false;
  var sort = req.query.sort;

  var offset = (page - 1) * config.PRODUCTS_PER_PAGE;

  if (!sort)
    sort = "default";
  var arrSort = [{
    value: "default",
    name: "Mặc định"
  }, {
    value: "alpha-asc",
    name: "Từ A - Z"
  }, {
    value: "alpha-desc",
    name: "Từ Z - A"
  }, {
    value: "price-asc",
    name: "Giá tăng dần"
  }, {
    value: "price-desc",
    name: "Giá giảm dần"
  }];

  var arrShowSort = [];
  switch (sort) {
    case "alpha-asc":
      var p1 = productRepo.loadAllAZ(offset);
      break;
    case "alpha-desc":
      var p1 = productRepo.loadAllZA(offset);
      break;
    case "price-asc":
      var p1 = productRepo.loadAllPriceAsc(offset);
      break;
    case "price-desc":
      var p1 = productRepo.loadAllPriceDesc(offset);
      break;
    case "default":
      var p1 = productRepo.loadAll(offset);
      break;
  }

  var p2 = productRepo.countAll();

  var p3 = homeRepo.loadTopNSX();
  var p4 = homeRepo.loadTopType();
  var p5 = homeRepo.loadAllNSX();
  var p6 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4, p5, p6]).then(([pRows, countRows, NSXRows, TypeRows, AllNSXRows, AllTypeRows]) => {
    var total = countRows[0].total;
    var nPages = parseInt(total / config.PRODUCTS_PER_PAGE);
    if (total % config.PRODUCTS_PER_PAGE > 0) {
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
            Sort: sort
          });
      else if (+page === nPages)
        for (var i = nPages - 2; i <= nPages; i++)
          numbers.push({
            value: i,
            isCurPage: i === +page,
            Sort: sort
          });
      else {
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          Sort: sort
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          Sort: sort
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          Sort: sort
        });
      }
    } else if (nPages < 2) {
      isFirstPage = true;
      isLastPage = true;
      numbers.push({
        value: +page,
        isCurPage: true,
        Sort: sort
      });
    } else {
      if (+page === 1) {
        isFirstPage = true;
        isLastPage = false;
        numbers.push({
          value: +page,
          isCurPage: true,
          Sort: sort
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          Sort: sort
        });
      } else {
        isFirstPage = false;
        isLastPage = true;
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          Sort: sort
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          Sort: sort
        });
      }
    }


    for (var i = 0; i < arrSort.length; i++)
      arrShowSort.push({
        valueSort: arrSort[i].value,
        nameSort: arrSort[i].name,
        isSort: sort === arrSort[i].value
      });

    var vm = {
      products: pRows,
      totalItem: total,
      noProducts: pRows.length === 0,
      page_numbers: numbers,
      last_page: nPages,
      isFirst: isFirstPage,
      isLast: isLastPage,
      topNSX: NSXRows,
      topType: TypeRows,
      AllNSX: AllNSXRows,
      AllType: AllTypeRows,
      TypeSort: arrShowSort,
      Sort: sort
    };

    for (var i = 0; i < numbers.length; i++)
      if (numbers[i].isCurPage == true) {
        vm.CurrentPage = numbers[i].value;
        break;
      }
    res.render('products/index', vm);
  });
});

router.get('/:FindWhat', (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }
  var isFirstPage = false,
    isLastPage = false;

  var FollowHangXe = req.query.isNSX;
  var FollowDongXe = req.query.isType;
  var find = req.params.FindWhat;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
  var p1, p2;
  var isNSX = false,
    isType = false;
  var sort = req.query.sort;

  if (!sort)
    sort = "default";
  var arrSort = [{
    value: "default",
    name: "Mặc định"
  }, {
    value: "alpha-asc",
    name: "Từ A - Z"
  }, {
    value: "alpha-desc",
    name: "Từ Z - A"
  }, {
    value: "price-asc",
    name: "Giá tăng dần"
  }, {
    value: "price-desc",
    name: "Giá giảm dần"
  }];
  var arrShowSort = [];

  if (!FollowDongXe && FollowHangXe) {
    switch (sort) {
      case "alpha-asc":
        p1 = productRepo.loadNSXAZ(find, offset);
        break;
      case "alpha-desc":
        p1 = productRepo.loadNSXZA(find, offset);
        break;
      case "price-asc":
        p1 = productRepo.loadNSXPriceAsc(find, offset);
        break;
      case "price-desc":
        p1 = productRepo.loadNSXPriceDesc(find, offset);
        break;
      case "default":
        p1 = productRepo.loadNSX(find, offset);
        break;
    }
    p2 = productRepo.countByNSX(find);
    isNSX = true;
  } else if (FollowDongXe && !FollowHangXe) {
    switch (sort) {
      case "alpha-asc":
        p1 = productRepo.loadTypeAZ(find, offset);
        break;
      case "alpha-desc":
        p1 = productRepo.loadTypeZA(find, offset);
        break;
      case "price-asc":
        p1 = productRepo.loadTypePriceAsc(find, offset);
        break;
      case "price-desc":
        p1 = productRepo.loadTypePriceDesc(find, offset);
        break;
      case "default":
        p1 = productRepo.loadType(find, offset);
        break;
    }

    p2 = productRepo.countByType(find);
    isType = true;
  }

  var p3 = homeRepo.loadTopNSX();
  var p4 = homeRepo.loadTopType();
  var p5 = homeRepo.loadAllNSX();
  var p6 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4, p5, p6]).then(([pRows, countRows, NSXRows, TypeRows, AllNSXRows, AllTypeRows]) => {
    var total = countRows[0].total;
    var nPages = parseInt(total / config.PRODUCTS_PER_PAGE);
    if (total % config.PRODUCTS_PER_PAGE > 0) {
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
            FollowNSX: isNSX,
            FollowType: isType,
            Sort: sort
          });
      else if (+page === nPages)
        for (var i = nPages - 2; i <= nPages; i++)
          numbers.push({
            value: i,
            isCurPage: i === +page,
            FollowNSX: isNSX,
            FollowType: isType,
            Sort: sort
          });
      else {
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
      }
    } else if (nPages < 2) {
      isFirstPage = true;
      isLastPage = true;
      numbers.push({
        value: +page,
        isCurPage: true,
        FollowNSX: isNSX,
        FollowType: isType,
        Sort: sort
      });
    } else {
      if (+page === 1) {
        isFirstPage = true;
        isLastPage = false;
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
      } else {
        isFirstPage = false;
        isLastPage = true;
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort
        });
      }
    }

    for (var i = 0; i < arrSort.length; i++)
      arrShowSort.push({
        valueSort: arrSort[i].value,
        nameSort: arrSort[i].name,
        isSort: sort === arrSort[i].value
      });

    var vm = {
      products: pRows,
      totalItem: total,
      noProducts: pRows.length === 0,
      page_numbers: numbers,
      last_page: nPages,
      isFirst: isFirstPage,
      isLast: isLastPage,
      topNSX: NSXRows,
      topType: TypeRows,
      AllNSX: AllNSXRows,
      AllType: AllTypeRows,
      FollowNSX: isNSX,
      FollowType: isType,
      Breadcumb: find,
      TypeSort: arrShowSort,
      Sort: sort
    };

    for (var i = 0; i < numbers.length; i++)
      if (numbers[i].isCurPage == true) {
        vm.CurrentPage = numbers[i].value;
        break;
      }
    res.render('products/index', vm);
  });
});

router.post('/', (req, res) => {
  var filter = req.query.sortBox;
  var pageTemp = req.query.page;
  if(!pageTemp)
    pageTemp = 1;
  res.redirect("/products?page=" + pageTemp + "&sort=" + filter);
});

router.post('/:FindWhat', (req, res) => {
  var filter = req.query.sortBox;
  var pageTemp = req.query.page;
  var find = req.params.FindWhat;
  var FollowHangXe = req.query.isNSX;
  var FollowDongXe = req.query.isType;
  if(!pageTemp)
    pageTemp = 1;
  if(FollowHangXe)
    res.redirect("/products/" + find + "?isNSX=true&page=" + pageTemp + "&sort=" + filter);
  else
    res.redirect("/products/" + find + "?isType=true&page=" + pageTemp + "&sort=" + filter);
});
module.exports = router;
