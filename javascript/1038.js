const path = require('path'); 
const currentFile = path.dirname(process.argv[1]); 
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

let [codigo, qtd] = lines[0].split(" ").map(item => Number(item));

let cachorroQuente1 = qtd * 4.00;
let xSalada2 = qtd * 4.50;
let xBacon3 = qtd * 5.00;
let torradaSimples4 = qtd * 2.00;
let refrigerante5 = qtd * 1.50;

if (codigo == 1){
    console.log("Total: R$ " + cachorroQuente1.toFixed(2));
}else if(codigo == 2){
    console.log("Total: R$ " + xSalada2.toFixed(2));
} else if(codigo == 3){
    console.log("Total: R$ " + xBacon3.toFixed(2));
} else if(codigo == 4){
    console.log("Total: R$ " + torradaSimples4.toFixed(2));
} else if(codigo == 5){
    console.log("Total: R$ " + refrigerante5.toFixed(2));
}