<html>
 <head>
 </head>
 <body>
   <button onclick = "Function()">Right Here</button>

<script>
function Function() {
    setTimeout(setAlert, 2000);
}
function setAlert() {
  alert("Assignment 3.1");
}
function play() {
var die1 =Math.ceil(Math.random()*6);

var die2 =Math.ceil(Math.random()*6);

var sum = die1+die2


document.write("Die 1 = " + die1) 
document.write("<br/>") 
document.write("Die 2 = " + die2) 
document.write("<br/>") 
document.write("Sum = " + sum)
document.write("<br/>") 
if (sum == 7 || sum == 11) 
{ 

document.write("CRAPS - you lose") 
document.write("<br/>") 
}
else if (die1== die2 && die1%2 == 0)
{
document.write("DOUBLES - you win") 
document.write("<br/>") 
}

}


and in the html

document.write("Simple Craps")
document.write("<br/>") 

play();
