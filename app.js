
const colors = require('colors');
const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
          

console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then(nombreArchivo => console.log(colors.america(`${nombreArchivo}, creado`)))
    .catch( err => console.log(err));





