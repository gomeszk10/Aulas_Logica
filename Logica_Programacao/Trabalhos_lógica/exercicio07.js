var soma = 0
var soma_total = 0
var quant_turma = parseInt(prompt("Quantas turmas tem: "))
document.write("<br>Quantidade de turmas é "+ quant_turma);

for(var i = 1; i <= quant_turma; i++){
    var quant_aluno = parseInt(prompt("Quantidade de alunos: "));
    
    if (quant_aluno > 40){
        alert("Não é permitido maior que 40 alunos por turma");
    }
    else{
        soma += quant_aluno;
        soma_total += quant_aluno;
        var media = quant_aluno / quant_turma;
        document.write("<br>A media de alunos na "+i+"°" +" turma é "+ media);
    }    
}
var resultado_media = soma_total/quant_turma
document.write("O numero de alunos nas turmas é : "+soma);
document.write("A Media total de alunos é : "+resultado_media);