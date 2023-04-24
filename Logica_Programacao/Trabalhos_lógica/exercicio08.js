var cds = Number(prompt("Digite a quantidade de CDs da coleção:"));
var totalGasto = 0;

for(var i = 1; i <= cds; i++){
  var valorCd = parseFloat(prompt("Digite o valor do CD " + i + ":")); 
  totalGasto += valorCd;
}

var mediaGasto = totalGasto / cds;

alert("Valor total investido: R$" + totalGasto.toFixed(2) + "\n  Valor médio gasto em cada CD: R$" + mediaGasto.toFixed(2));