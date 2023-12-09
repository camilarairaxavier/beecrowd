var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var [n1, n2] = lines.shift().split(' ').map(Number);
var auxiliar;

if (n2 > n1) {
    auxiliar = n1;
    n1 = n2;
    n2 = auxiliar; 
} 

if (n1 % n2 == 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}