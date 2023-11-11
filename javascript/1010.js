const path = require('path'); 

const currentFile = path.dirname(process.argv[1]); 


var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/* Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. */




var [codigo_peca1, qtd_peca1, valor_peca1] = lines[0].split(" ");
var [codigo_peca2, qtd_peca2, valor_peca2] = lines[1].split(" ");
var valor_total = ((qtd_peca1 * valor_peca1) + (qtd_peca2 * valor_peca2))

console.log("VALOR A PAGAR = " + valor_total.toFixed(2))
    

