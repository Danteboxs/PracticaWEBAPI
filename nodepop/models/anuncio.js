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

// creamos un método estático simple sin parametros para la apiv1
anuncioSchema.statics.listar = function() {
  const query = Anuncio.find();
  return query.exec();
}

// crear el modelo de datos con ese esquema
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportamos el modelo, en principio no hace falta
module.exports = Anuncio;