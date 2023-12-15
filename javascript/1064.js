var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var positivos = 0;
var media = 0;

for (let i = 0; i < lines.length; i++) {
    let valor = Number(lines[i]);
    if (valor > 0) {
        positivos++;
        media += valor; 
    }
}
media = media / positivos
console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1))