const path = require('path'); 
const currentFile = path.dirname(process.argv[1]); 
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido. */

let totalSegundos = lines[0].split(" ").map(item => Number(item));
let horas;
let minutos;
let segundos;

let fracaoResto;

horas = parseInt(totalSegundos / 3600)
fracaoResto = totalSegundos - (horas * 3600) // poderia usar  totalSegundos % 3600
minutos = parseInt(fracaoResto / 60)
fracaoResto = (fracaoResto - (minutos * 60))

console.log(horas + ":" + minutos + ":" + fracaoResto)


