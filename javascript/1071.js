var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var x = Number(lines.shift());
var y = Number(lines.shift());

var impares = 0;

if (x > y) {
    for (let i = y + 1; i < x; i++) {
        if (i % 2 != 0) impares += i;
    }
}else {
    for (let i = x + 1; i < y; i++) {
        if (i % 2 != 0) impares += i;
    }
}

console.log(impares)



