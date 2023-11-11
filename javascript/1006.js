//esse comando require permite importar um modulo externo ao padrão, que nao está importado automaticamente dentro do node. Path é um módulo do node que nos permite ter comandos para lidar com o sistema de arquivos*/
const path = require('path'); 
//O dirname pega automaticamente o nome do diretorio pra gente e grava em currentFile
const currentFile = path.dirname(process.argv[1]); 

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//copiar e colar no beecrowd daqui pra baixo

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let media = (((a * 2) + (b * 3) + (c * 5)) / 10);

console.log("MEDIA = "+ media.toFixed(1));


