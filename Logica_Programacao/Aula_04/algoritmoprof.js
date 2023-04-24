var nome = prompt("dg o produto");
var valor = parseFloat(prompt("Dg o valor"));
var qtde = parseInt(prompt("Digite a qtde"));

var total = valor * qtde;
if (total >= 100) {
    alert("desc 10%")
    document.write("total sem des" + total)
    var descl = (total - total * 10)
}

else {

    alert("Desc 5 %");
}
