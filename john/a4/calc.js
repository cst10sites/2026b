// setInterval(calculate(), 100)

var subtotal = 0
var gst = 0
var afterGST = 0
var addTax = 0
var pst = 0
var tip = 0
var afterTIP = 0
var split = 0
var afterSPLIT = 0

function calculate() {
	var subtotal = Number(document.getElementById('subtotal').value);
	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;

	var addTax = document.getElementById('pst').checked

	if (addTax === true) {
		var pst = 0.07 * subtotal;
		afterGST = afterGST + pst;
	}

	document.getElementById('firstOutput').innerHTML = "After tax: " + afterGST.toFixed(2);

	var tip = (afterGST * (document.querySelector('input[name="tip"]:checked')?.value || 0));
	var afterTIP = afterGST + tip

	document.getElementById('secondOutput').innerHTML = "After tip: " + afterTIP.toFixed(2);

	var split = document.getElementById("split").value;
	var afterSPLIT = afterTIP / split;

	document.getElementById('thirdOutput').innerHTML = "After split: " + afterSPLIT.toFixed(2);
}

function resetForm() {
    document.querySelector("form").reset();

    document.getElementById("firstOutput").textContent = "";
    document.getElementById("secondOutput").textContent = "";
    document.getElementById("thirdOutput").textContent = "";
}