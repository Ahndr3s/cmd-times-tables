const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


//Se obtienen y desetructuran argumentos dados por consola NO ES NECESARIO USANDO YARGS
//  EJEMPLO: node app --base=8
// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')
// console.log(base)

// Se manda a llamar la funcion asincrona de manera convencional USANDO YARGS
// let base = 6;
createFile(argv.b, argv.l, argv.h)
    .then(fileName => console.log(`archivo ${fileName} creado`))
    .catch(err => console.log(err))