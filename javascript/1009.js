//esse comando require permite importar um modulo externo ao padrão, que nao está importado automaticamente dentro do node. Path é um módulo do node que nos permite ter comandos para lidar com o sistema de arquivos*/
const path = require('path'); 
//O dirname pega automaticamente o nome do diretorio pra gente e grava em currentFile
const currentFile = path.dirname(process.argv[1]); 

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//copiar e colar no beecrowd daqui pra baixo

/*Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.*/

let vendedor = Number(lines[0]);
let salarioFixo = Number(lines[1]);
let totalVendas = Number(lines[2]);
let totalReceber = (salarioFixo + (totalVendas * 0.15));

console.log("TOTAL = R$ " + totalReceber.toFixed(2));
