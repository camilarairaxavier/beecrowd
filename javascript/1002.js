const path = require('path'); 

const currentFile = path.dirname(process.argv[1]); 


var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

//- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

let raio = parseFloat(lines[0]);
let n = 3.14159
let area = (n * Math.pow(raio, 2));

console.log("A=" + area.toFixed(4))


























