var idade = Number(prompt("Qual é a sua idade? "));
var sexo = prompt("Qual é o seu sexo? (M/F) ");

if (idade >= 21 && sexo == "Feminino") {
    alert("Você tem com desconto VIP");
} else {
    alert("Você não tem desconto VIP");
}
