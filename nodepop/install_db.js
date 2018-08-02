'use strict';

require('dotenv').config();

const readline = require('readline');

const anuncios = require('./data/anuncios.json').anuncios;
const conn = require('./lib/connectionBD');
const Anuncio = require('./models/Anuncio');

conn.once('open', async () => {
  try {
    const response = await askUser('¿Borrar contenido actual de la BD? (si/no)\n');

    if (response.toLowerCase() !== 'si') {
      console.log('No se realiza carga de datos');
      process.exit();
    }
    await initAnuncios(anuncios);
    process.exit();

  } catch (err) {
    console.log('error al realizar la carga incial de datos', err);
    process.exit(1);
  }
});

function askUser(question) {
  return new Promise((resolve, reject) => {
    const readlineinn = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readlineinn.question(question,
      function(answer) {
        readlineinn.close();
        resolve(answer);
      }
    );
  });
}

async function initAnuncios(anuncios) {
  // eliminar los anuncios actuales
  await Anuncio.deleteMany().then(async function(result){
    console.log(`Eliminados ${result.n} anuncios.`);
    // inserta los anuncios actuales
    await Anuncio.insertMany(anuncios).then(async function(result){
      console.log(`Insertados ${result.length} anuncios.`);    
    });
  });
}