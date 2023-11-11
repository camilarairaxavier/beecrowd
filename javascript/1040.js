const path = require('path');
const currentFile = path.dirname(process.argv[1]);
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/* Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno. */

let [nota1, nota2, nota3, nota4] = lines[0].split(" ").map(item => Number(item));
let [nota_recuperacao] = lines[1].split(" ").map(item => Number(item));


let media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10);
let media_final = ((media + nota_recuperacao) / 2);


console.log("Media: " + media.toFixed(1))

if (media >= 7.0) {
    console.log("Aluno aprovado.")
}
else if (media < 5.0) {
    console.log("Aluno reprovado.")
}
else if ((media >= 5.0) && (media <= 6.9)){
    console.log("Aluno em exame.")
    console.log("Nota do exame: " + nota_recuperacao.toFixed(1))
  
    if (media_final >= 5.0) {
        console.log("Aluno aprovado.")
        console.log("Media final: " + media_final.toFixed(1))
    }
    else {
        console.log("Aluno reprovado.")
        console.log("Media final: " + media_final.toFixed(1))
    }
}







