var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var pares = 0;

for (let i = 0; i < 5; i++) {
    if (lines[i] % 2 == 0) pares++
}
console.log(`${pares} valores pares`)