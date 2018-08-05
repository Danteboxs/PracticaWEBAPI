var express = require('express');
var router = express.Router();
var datosGlobal = {};

const Anuncio = require('../models/Anuncio');

function datosDevueltos() {
  Anuncio.find(function (err, docs) {
    datosGlobal =  docs;
  }).exec();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  datosDevueltos();
  res.render('index', { 
    title: 'NodePop',
    datos: datosGlobal
  });
});

module.exports = router;
