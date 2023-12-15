var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

let n = Number(lines.shift());

for(let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
}