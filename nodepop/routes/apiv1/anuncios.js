'use strict';

const express = require('express');
const router = express.Router();
var createError = require('http-errors');

const Anuncio = require('../../models/Anuncio');

/**
 * GET /
 * Retorna una lista de anuncios
 */
router.get('/', async (req, res, next) => {
  try {    
    const anuncios = await Anuncio.listar();
    res.json({ success: true, result: anuncios });
  } catch (err) {
    next(err);
  }  
});

module.exports = router;