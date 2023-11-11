const path = require('path'); 
const currentFile = path.dirname(process.argv[1]); 
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/* Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000 */

let valor = lines[0].split(" ").map(item => Number(item));

if(valor >= 0 && valor <= 25) {
    console.log("Intervalo [0,25]");
} else if(valor > 25 && valor <= 50) {
    console.log("Intervalo (25,50]");
} else if(valor > 50 && valor <= 75) {
    console.log("Intervalo (50,75]");
} else if(valor > 75 && valor <= 100) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo");
}
