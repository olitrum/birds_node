var Birds = require('../models/birds');
var express = require('express');
var router = express.Router();
var verify = require('../helpers/verifyToken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add_bird', verify, function(req, res, next) {
  res.render('add_bird', { title: 'Add a new bird' });
});

router.post('/add_bird', function(req, res, next) {
  var bird = new Birds(
    { 
      name: req.body.name,
      kingdom: req.body.kingdom,
      phylum: req.body.phylum,
      class: req.body.class,
      order: req.body.order,
      family: req.body.family,
      genus: req.body.genus,
      conservation: req.body.conservation,
      image: req.body.image
    }
  );

    bird.save(function (err) {
      if (err) { return next(err); }
      res.send('Bird added!');
  }); 
});

router.get('/view_bird', function(req, res, next) {
  Birds.find()
      .sort([['name', 'ascending']])
      .exec(function (err, list_birds) {
        if (err) { return next(err); }
        res.render('view_bird', { title: 'List of Birds', list_birds: list_birds });
      });
});


module.exports = router;
