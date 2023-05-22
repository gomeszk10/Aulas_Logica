function exibir()
{
    var nome = document.getElementById("caixa de nome").value;
    var n1 = document.getElementById("caixa de valor 1").value;
    var n2 = document.getElementById("caixa de valor 2").value;
    var total = parseInt(n1)+parseFloat(n2);

    alert (" seu nome: "+nome);
    document.getElementById("caixa total").value = total; 
}
function valorquadrado(){
    alert(" Sistema para descobrir o valor Quadrado: ");
    var valor = document.getElementById("caixadevalor1").value;
    
    var qua = parseFloat (valor)* parseFloat (valor);
    alert (" Valor Quadrado " + qua);
}

function dual ()
{

     Exibir();
     valorquadrado();
}

function nome ()
{
    var nome = ['Carol','Roberto','Renata'];
    var idade = [21,35,42];

    document.getElementById("caixa de nome").value
    = nome[2];
    alert(idade[2])

}