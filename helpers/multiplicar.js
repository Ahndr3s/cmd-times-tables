const { rejects } = require('assert');
const colors = require('colors/safe')
const fs = require('fs');
const { resolve } = require('path');

const createFile = async (base = 5, listar = false, limit = 10) => {
    try {
        let x = 1;
        let cadena = '';
        let salida = '';
        while (x <= limit) {
            cadena += `${base} x ${x} = ${base * x}\n`;
            salida += `${base} ${ colors.magenta('x')} ${x} = ${base * x}\n`;
            x++
        }

        if(listar)
            console.log(salida)


        fs.writeFileSync(`./salida/tabla-${base}.txt`, cadena)
        return (`tabla-${base}.txt`)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}