const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la lista de multiplicaciones impresas en el archivo creado'
    })
    .option('h', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        describe: 'Numero limte del 2do factor'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La base y el 2do factor tienen que ser numeros'
        }
        return true;
    })
    .argv

console.clear()

module.exports = argv