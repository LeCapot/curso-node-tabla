const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base', 
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta', 
        type: 'number',
        default: 10,
        describe: 'se indica desde el 1 hasta que numero multiplicar'
    })
    .option('l',{
        alias: 'listar', 
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'
        
    })
    .check((argv,options) =>{
        //console.log('yargs',argv) 
        if( isNaN ( argv.b ) ){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;