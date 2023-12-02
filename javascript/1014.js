// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

// Saída
// Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var distancia = lines.shift();
var combustivel = lines.shift();
var consumo_medio = distancia / combustivel 

console.log(`${consumo_medio.toFixed(3)} km/l`); 



