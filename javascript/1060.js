var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

let total = 0 

for (let i = 0; i < 6; i++) {
    let n = Number(lines[i])
    if (n > 0 ) total++
}

console.log(`${total} valores positivos`)