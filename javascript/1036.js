// Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

// Entrada
// Leia três valores de ponto flutuante (double) A, B e C.

// Saída
// Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var [a, b, c] = lines.shift().split(' ').map(Number);
var delta = Math.pow(b,2) - 4 * a * c
var base = 2 * a
var raiz1 = (- b + Math.sqrt(delta) ) / base
var raiz2 = (- b - Math.sqrt(delta) ) / base

if (base == 0 || delta < 0 ) {
    console.log('Impossivel calcular')
} else {
    console.log(`R1 = ${raiz1.toFixed(5)}`);
    console.log(`R2 = ${raiz2.toFixed(5)}`);
}
