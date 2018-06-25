var express = require('express');
var detailRepo = require('../repos/detailRepo');
var router = express.Router();

router.get('/:id', (req, res) => {
    detailRepo.loadItem(req.params.id).then(rows => {
      
    }).catch(error => {
      res.send({Error: '404', message: err});
    })
    res.render('detail/detailCar');
});

module.exports = router;
