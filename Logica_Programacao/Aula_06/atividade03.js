var tabuada = parseInt(prompt("digite a tabuada"));
// digite a tabuada dejesada
var ciclo = 0
//  valor do ciclo
while(ciclo <= 9) 
// laço/ciclo menor ou igual a 9
{
    document.write( tabuada+"x"+ciclo +"="+ tabuada*ciclo + "<br/>" )
    // aparece no site ex: 9x1=9
    ciclo++
    // define um laço até o valor desejado
}

// white = laço de repetição (se repete dependendo da condição)