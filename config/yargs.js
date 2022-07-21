

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Nos permite listar la tabla en la consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Define hasta que valor multiplicamos',
        default: 10
    })
    .check( (argv, options) => {
        if (argv.h < 1) {
            throw 'El límite superior debe ser mayor que 1'
        }
        return true
    })
    .argv;

    module.exports = argv;