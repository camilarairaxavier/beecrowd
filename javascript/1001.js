//esse comando require permite importar um modulo externo ao padrão, que nao está importado automaticamente dentro do node. Path é um módulo do node que nos permite ter comandos para lidar com o sistema de arquivos*/
const path = require('path'); 
//O dirname pega automaticamente o nome do diretorio pra gente e grava em currentFile
const currentFile = path.dirname(process.argv[1]); 

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


//copiar e colar no beecrowd daqui pra baixo

let a;
let b;
let x;

a = parseInt(lines[0]); //converter para numero, pois sempre que se faz a leitura de um arquivo, ele virá como texto.
b = parseInt(lines[1]);

x = a + b;

console.log("X = " + x);