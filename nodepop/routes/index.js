var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');

/* GET home page. */
router.get('/', function(req, res, next) {
  Anuncio.find().then(function (doc) {
    res.render('index', { 
      title: 'NodePop',
      datos: doc
    });
  });
});

module.exports = router;
