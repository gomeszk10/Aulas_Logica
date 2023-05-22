var val = 0
var m = 0

for(var i = 1; i <= 5; i++){
    
    val = parseInt(prompt("numero"+i));

    if (val > m)
    m = val
}

alert("Maior numero digitado:" +m);