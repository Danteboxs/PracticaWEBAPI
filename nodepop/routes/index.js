var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');

function datosDevueltos() {
  return Anuncio.find(function (err, docs) {
    datosGlobal =  docs;
  }).exec();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  datosDevueltos().then(function (doc) {
    res.render('index', { 
      title: 'NodePop',
      datos: doc
    });
  });
});

module.exports = router;
