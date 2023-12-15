var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var pares = 0;
var impares = 0;
var negativos = 0;
var positivos = 0;

for (let i = 0; i < 5; i++) {
    if (lines[i] % 2 == 0) {
        pares++ 
    } else {
        impares++ 
    }
    if (lines[i] > 0) {
        positivos++ 
    } else if (lines[i] < 0) {
        negativos++
    }
}

console.log(`${pares} valor(es) par(es)`); 
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`); 
console.log(`${negativos} valor(es) negativo(s)`); 

