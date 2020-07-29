document.getElementById("press").addEventListener("click" , function(){

var bb = document.getElementById("firstNumber").value;

var cc = document.getElementById("secondNumber").value;

var op = document.getElementById("opp").value;

var r ;

if (op == '+') {
    r = Number(bb) + Number(cc);
}
else if (op == '-'){
    r= Number(bb) - Number(cc);
}
else if (op == '*'){
    r = Number(bb) * Number(cc);
}
else if(op == '/' ) {
    r = Number(bb) / Number(cc);
}
else {alert ("SomeThing gone wrong");}

document.getElementById("tt").innerHTML = r;

})

document.getElementById("clear").addEventListener("click" , function (){

    document.getElementById("firstNumber").value = " ";
    document.getElementById("secondNumber").value = " ";
    document.getElementById("tt").innerHTML = " ";
})
