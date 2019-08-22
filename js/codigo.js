function calc(){
var argOne=document.getElementById('arg1').value;
var argTwo=document.getElementById('arg2').value;
var ans=(argOne*argTwo);
document.getElementById('result').innerHTML=argOne + ' multiplicado por ' + argTwo + ' es igual a ' + ans;
}
