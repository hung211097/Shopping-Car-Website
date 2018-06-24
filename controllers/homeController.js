var express = require('express');
var homeRepo = require('../repos/homeRepo');
var router = express.Router();
var multer = require('multer');
var mkdirp = require('mkdirp');

var count = 1;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './public/upload';

    mkdirp(dir, err => cb(err, dir))
    //cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
      var name = file.originalname;

      name = name.substr(0, name.indexOf('.')) + '_' + count++ + name.substr(name.indexOf('.'));
    cb(null, name);
  }
})

var upload = multer({storage: storage});

router.get('/', (req, res) => {
  var p1 = homeRepo.loadTopSeen();
  var p2 = homeRepo.loadTopSell();
  var p3 = homeRepo.loadTopNew();

  Promise.all([p1, p2, p3]).then(([seenRows, sellRows, newRows]) => {
    // var isPurchase = req.session.buy
    // req.session.buy = false;

    var productsData = {
      topSeen: seenRows,
      topSell: sellRows,
      topNew: newRows,
    };
    res.render('home/index', productsData);
  }).catch(err => {
    res.render('error/index', {layout: false});
  });
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/policy', (req, res) => {
  res.render('home/policy');
});

router.get('/service', (req, res) => {
  res.render('home/service');
});

router.get('/contact', (req, res) => {
  res.render('home/contact');
});


router.post('/about', upload.array('photos'), (req, res) => {
  // for(var i = 0; i < req.files.length; i++)
  // {
  //   var name = req.files[i].originalname;
  //   name = name.substr(0, '.') + '_' + (i + 1) + name.substr('.');
  //   fs.rename(req.files[i].path, name , function(err){
  //         if(err){
  //             throw err;
  //         }
  //   });
  // }
  count = 1;
});


module.exports = router;
