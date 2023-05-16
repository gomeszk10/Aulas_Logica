var n1 = parseInt(prompt("digite o numero1: "));
var n2 = parseInt(prompt("digite o numero2: "));
var n3 = parseInt(prompt("digite o numero3: "));
var n4 = parseInt(prompt("digite o numero4: "));
var n5 = parseInt(prompt("digite o numero5: "));

numeros = [n1,n2,n3,n4,n5]

numeros.forEach(item => {
    
    document.write("O numero "+ item + " ao quadrado é " + item ** 2 + "<br>")
});
