var idade1 = parseInt(prompt("Digite a primeira idade "));
var idade2 = parseInt(prompt("Digite a segunda idade "));
var idade3 = parseInt(prompt("Digite a terceira idade "));

var maior = 0;
var menor = 0;

if (idade1>18){
   maior++;
}else
{
    menor++;
}
if (idade2>18){
   maior++;
}
else{
    menor++;
}
if (idade3>18){
    maior++;
}
else{
    menor++;
}   

alert(`${maior} maiores e ${menor} menores de 18 anos`);