// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

const { Console } = require('console');

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n'); 

var totalDias = Number(lines.shift());
var ano = parseInt(totalDias / 365);
var resto = totalDias % 365

var meses = parseInt(resto / 30);
resto = resto % 30

var dias = resto

console.log(`${ano} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)