var subtotal;
var tip;
var people;


function calculate() {


subtotal = Number(document.getElementById("subtotal").value);
tip = Number(document.getElementById("tip").value);

people = Number(document.getElementById("people").value);

var afterGST = subtotal * 1.05;
var total = afterGST + (afterGST * tip);

var perPerson = total / people;

document.getElementById("afterGST").innerHTML = afterGST.toFixed(2);

document.getElementById("total").innerHTML = total.toFixed(2);
document.getElementById("perPerson").innerHTML = perPerson.toFixed(2);

} 


function resetCalc() {

document.getElementById("subtotal").value = "";
document.getElementById("tip").value = "0";

document.getElementById("people").value = "1";

document.getElementById("afterGST").innerHTML = "";

document.getElementById("total").innerHTML = "";
document.getElementById("perPerson").innerHTML = "";

} 