//esse comando require permite importar um modulo externo ao padrão, que nao está importado automaticamente dentro do node. Path é um módulo do node que nos permite ter comandos para lidar com o sistema de arquivos*/
const path = require('path'); 
//O dirname pega automaticamente o nome do diretorio pra gente e grava em currentFile
const currentFile = path.dirname(process.argv[1]); 

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//copiar e colar no beecrowd daqui pra baixo

/*Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.*/

let numFuncionario = Number(lines[0]);
let horasTrabalhadas = Number(lines[1]);
let valorHora = Number(lines[2]);
let resultado = (horasTrabalhadas * valorHora);

console.log("NUMBER = " + numFuncionario);
console.log("SALARY = U$ " + resultado.toFixed(2));

