var express = require('express');
var homeRepo = require('../repos/homeRepo');
var productRepo = require('../repos/productsRepo');
var config = require('../config/config');
var extra_Array = require('../extra_array/exArr');

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

  var arrSort = extra_Array.Sort;

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
  var p3 = homeRepo.loadAllNSX();
  var p4 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4]).then(([pRows, countRows, AllNSXRows, AllTypeRows]) => {
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

router.get('/productsWithBrand/:brand', (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }
  var isFirstPage = false,
    isLastPage = false;

  var find = req.params.brand;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
  var p1, p2;
  var isNSX = true,
    isType = false;
  var sort = req.query.sort;

  if (!sort)
    sort = "default";
  arrSort = extra_Array.Sort;
  var arrShowSort = [];

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

  var p3 = homeRepo.loadAllNSX();
  var p4 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4]).then(([pRows, countRows, AllNSXRows, AllTypeRows]) => {
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
            Sort: sort,
            Breadcumb: find
          });
      else if (+page === nPages)
        for (var i = nPages - 2; i <= nPages; i++)
          numbers.push({
            value: i,
            isCurPage: i === +page,
            FollowNSX: isNSX,
            FollowType: isType,
            Sort: sort,
            Breadcumb: find
          });
      else {
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
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
        Sort: sort,
        Breadcumb: find
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
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
      } else {
        isFirstPage = false;
        isLastPage = true;
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
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

router.get('/productsWithType/:type', (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }
  var isFirstPage = false,
    isLastPage = false;

  var find = req.params.type;
  var offset = (page - 1) * config.PRODUCTS_PER_PAGE;
  var p1, p2;
  var isNSX = false,
    isType = true;
  var sort = req.query.sort;

  if (!sort)
    sort = "default";
  arrSort = extra_Array.Sort;

  var arrShowSort = [];

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

  var p3 = homeRepo.loadAllNSX();
  var p4 = homeRepo.loadAllType();
  Promise.all([p1, p2, p3, p4]).then(([pRows, countRows, AllNSXRows, AllTypeRows]) => {
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
            Sort: sort,
            Breadcumb: find
          });
      else if (+page === nPages)
        for (var i = nPages - 2; i <= nPages; i++)
          numbers.push({
            value: i,
            isCurPage: i === +page,
            FollowNSX: isNSX,
            FollowType: isType,
            Sort: sort,
            Breadcumb: find
          });
      else {
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
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
        Sort: sort,
        Breadcumb: find
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
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page + 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
      } else {
        isFirstPage = false;
        isLastPage = true;
        numbers.push({
          value: +page - 1,
          isCurPage: false,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
        });
        numbers.push({
          value: +page,
          isCurPage: true,
          FollowNSX: isNSX,
          FollowType: isType,
          Sort: sort,
          Breadcumb: find
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

router.get('/detail/:FindWhat', (req, res) => {
  var name = req.params.FindWhat;
  var p1 = productRepo.loadSingle(name);
  var p2 = productRepo.loadMore5NSX(name);
  var p3 = productRepo.loadMore5Type(name);
  var p4 = productRepo.IncreaseView(name);

  Promise.all([p1, p2, p3, p4]).then(([result, moreNSXRows, moreTypeRows, Inc]) => {
    var vm = {
      Car: result[0],
      MoreNSX: moreNSXRows,
      MoreType: moreTypeRows
    }
    res.render('products/detail', vm);
  }).catch(error => {
    res.render('error/index', {
      layout: false
    });
  });
});

router.post('/', (req, res) => {
  var filter = req.query.sortBox;
  var pageTemp = req.query.page;
  if (!pageTemp)
    pageTemp = 1;
  res.redirect("/products?page=" + pageTemp + "&sort=" + filter);
});

router.post('/productsWithBrand/:FindWhat', (req, res) => {
  var filter = req.query.sortBox;
  var pageTemp = req.query.page;
  var find = req.params.FindWhat;
  if (!pageTemp)
    pageTemp = 1;

  res.redirect("/products/productsWithBrand/" + find + "?&page=" + pageTemp + "&sort=" + filter);
});

router.post('/productsWithType/:FindWhat', (req, res) => {
  var filter = req.query.sortBox;
  var pageTemp = req.query.page;
  var find = req.params.FindWhat;
  if (!pageTemp)
    pageTemp = 1;
  res.redirect("/products/productsWithType/" + find + "?&page=" + pageTemp + "&sort=" + filter);
});

module.exports = router;
