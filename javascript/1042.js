var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number); 

var vetor = [...lines]

lines.sort((a,b) => a - b)

console.log(lines[0]);
console.log(lines[1]);
console.log(lines[2]);
console.log();
console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);





