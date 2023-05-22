var data = prompt("Digite uma data no formato dd/mm/aaaa");

var partesData = data.split("/");

var dia = partesData[0];
var mes = partesData[1];
var ano = partesData[2];

alert("Dia " + dia);
alert("Mês " + mes);
alert("Ano " + ano);