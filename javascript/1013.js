const path = require('path'); 
const currentFile = path.dirname(process.argv[1]); 
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/* Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior". */

var [a, b, c] = lines[0].split(" ").map(item => Number(item));

var maior = a;

if (b > maior) {
  maior = b;
}

if (c > maior) {
  maior = c;
}

console.log(maior + " eh o maior");