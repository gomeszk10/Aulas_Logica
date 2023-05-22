var val = 0
var soma = 0
var media = 0
for(var i = 1; i <5; i++){
    val = parseInt(prompt("numero"+i));
    soma += val
}
document.write ("Resultado da soma"+soma)

document.write("media"+soma/5)