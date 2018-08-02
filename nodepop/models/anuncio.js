'use strict';

const mongoose = require('mongoose');

// definir un esquema de datos
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// creamos un método estático para pasar parametros al modelo
anuncioSchema.statics.listar = function(filtro, limit, skip, fields, sort) {
  const query = Anuncio.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.select(fields);
  query.sort(sort);
  return query.exec();
}

// crear el modelo de datos con ese esquema
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo, en principio no hace falta
module.exports = Anuncio;