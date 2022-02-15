const { option } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:  'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:  'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:  'Hasta que número llegará la tabla'
    })
    .check( (argv, option) => {
        if( isNaN (argv.b) || isNaN (argv.h)){
            throw 'La base y el límite tienen que ser números'
        }
        return true;
    })
    .argv

module.exports = argv;
