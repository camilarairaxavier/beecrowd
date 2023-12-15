var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

let n = Number(lines.shift());

let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
    if (lines[i] >= 10 && lines[i] <= 20) {
        dentro++ 
    }else {
        fora++
    }
 }

 console.log(`${dentro} in`);
 console.log(`${fora} out`);