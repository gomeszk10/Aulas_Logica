var aluno = prompt ("Digite seu nome: ");

document.write (" Aluno " + aluno)
var n1 = parseFloat(prompt ("Digite a n1 "));
var n2 = parseFloat(prompt ("Digite a n2 "));
var n3 = parseFloat(prompt ("Digite a n3 "));

var media = (n1+n2+n3)/3;

console.log (" aluno " + aluno);

if(media >=7) {
    document.write (" aprovado " + aluno);
} else{
    document.write (" reprovado " + aluno);
}


// >, <, ==, >=,<=,<>
// console.log aparece no console e document.write aparece na tela (site)
// else = se não 
// if é por exemplo Se média 7 maior aprovado
