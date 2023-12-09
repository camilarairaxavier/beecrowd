var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var [a,b,c] = lines.shift().split(' ').map(Number);

if (a + b > c && a + c > b && b + c > a){
    var perimetro = a + b + c
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
    var area = ( (a + b) * c ) / 2 
    console.log(`Area = ${area.toFixed(1)}`)
} 