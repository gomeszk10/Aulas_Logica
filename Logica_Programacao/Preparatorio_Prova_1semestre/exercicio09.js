nota = parseInt(prompt("Digite uma nota de 0 a 10: "))

while (nota > 10 || nota < 0)
{
    alert("Este número é inválido")

    nota = parseInt(prompt("Digite uma nota de 0 a 10: ")) 
}

alert("Este número é válido")   