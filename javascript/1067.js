var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var x = Number(lines.shift());

for (let i = 1; i <= x; i++) {
    if (i % 2 != 0) console.log(i);
}