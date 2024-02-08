<html>
 <head>
 </head>
 <body>
   <button onclick = "Function()">Right Here</button> 

<script>
function Function() {
    setTimeout(setAlert, 2000); //Timer Duration
}
function Function(g1, g2) {
	return g1 / g2;
}
const value = myFunction(8, 2);
console.log(value);
function play() {
var die1 =Math.ceil(Math.random()*2);

var die2 =Math.ceil(Math.random()*3);

var sum = die1+die2 //variable sums to initiate death


document.write("You Lose = " + die1) //death message
document.write("<br/>") 
document.write("Skill Issue = " + die2) //death message 2
document.write("<br/>") 
document.write("Sum = " + sum)
document.write("<br/>") 
if (sum == 3 || sum == 15) 
{ 

document.write("Whoops - you lost") //losing text
document.write("<br/>") 
}
else if (die1== die2 && die1%2 == 0)
{
document.write("Yipee! - you win") //winning text
document.write("<br/>") 
}

}


and in the html

document.write("Simple Craps")
document.write("<br/>") 

play();
