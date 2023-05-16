nota = parseInt(prompt("Digite uma nota de 0 a 10: "))

while (nota > 10 || nota < 0)
// while = nota maior que 10 ou nota menor que 0 é igual a errado
{
    alert("Este número é inválido")
    nota = parseInt(prompt("Digite uma nota de 0 a 10: ")) 
    //console.log("Estou dentro do while")
}
//console.log("Estou saiu do while")
alert("Este número é válido")