function test (){
   alert ("Working");
}
var b = document.getElementsByClassName("numbers").length;
for(var i = 0 ; i < b ; i++) {
document.querySelectorAll('button.numbers')[i].addEventListener("click", function(){

   var f = this.value;
   document.getElementById("result").value +=f;


})}


document.getElementById("calc").addEventListener("click" , function(){
   var screenValue = document.getElementById("result").value;
   var screenText = document.getElementById("result").innerHTML;
   var yy = eval(screenValue);
   document.getElementById("result").value = yy;
   
  
 
})

/*var n = document.getElementsByClassName("opperator").length;
for (var h = 0 ; h< n ; h++){
   document.querySelectorAll('button.opperator')[h].addEventListener("click" , function (){
      if (this.innerHTML = "+") {

      }
   })
}*/


