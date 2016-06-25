var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      sets: ["PACE NSC 2015", "CALI"]
    });
});

router.get('/list', function (req, res, next) {
  var set = req.query.set;
  res.setHeader('Content-Type', 'application/json');
  res.send('a');
    //res.
});