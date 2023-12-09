var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var salario = parseFloat(lines.shift())
var percentual 
var reajuste 

if (salario <= 400) {
    reajuste = salario * 0.15
    salario += salario * 0.15
    percentual = "15 %"
} else if (salario <= 800) {
    reajuste = salario * 0.12
    salario += salario * 0.12
    percentual = "12 %"
} else if (salario <= 1200) {
    reajuste = salario * 0.10
    salario += salario * 0.10
    percentual = "10 %"
} else if (salario <= 2000) {
    reajuste = salario * 0.07
    salario += salario * 0.07
    percentual = "7 %"
} else {
    reajuste = salario * 0.04
    salario += salario * 0.04
    percentual = "4 %"
}

console.log(`Novo salario: ${salario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual}`)

