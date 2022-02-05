/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function solucount(constante) {
    if (constante<3) return constante;
    let primero = 1;
    let segundo = 2;
    for (let i=2;i<constante;i++){
        const actual = primero + segundo;
        primero = segundo
        segundo = actual
    }
    return segundo;
}

var pelda;
readline.question('Cantidad de peldaños que tiene la escalera: ', pelda => {

    f=solucount(pelda);
    console.log('Cantidad de formas para subir a las escaleras: '+f);
    readline.close()
})