/* Summary:
	1. Number(aStr): converts text to a number (for arithmetic)
	2. aNumber.toFixed(2): converts a number to text with 2 decimal places
*/

function calculate() {
	// calculate GST total
	var subtotal = Number(document.getElementById('subtotal').value);
	var tip = Number(document.getElementById('selectTip').value);
	var paying = Number(document.getElementById('selectPay').value);
	var calcTpBefore = document.getElementById('cheap').checked;
	var gst = 0.05;
	var afterGST; 
	var afterTip;
	var afterSplit;
	if (calcTpBefore == true) {
		afterTip = subtotal * (1 + tip);
		afterGST = afterTip * (1 + gst);
		afterSplit = afterGST / paying;
	}
	else{
		afterGST = subtotal * (1 + gst);
		afterTip = afterGST * (1 + tip);
		afterSplit = afterTip / paying;
	}

	

	document.getElementById('firstOutput').innerHTML = "After GST: $" + Number(afterGST.toFixed(2));
	document.getElementById('secondOutput').innerHTML = "After Tip: $" + Number(afterTip.toFixed(2));
	document.getElementById('thirdOutput').innerHTML = "Total Per Person: $" + Number(afterSplit.toFixed(2));
	// calclulate tip amount before (subtotal) or after tax (afterGst) **
// rest of the code goes into this function
	// calc total = total abnount = aftergst + tip amount
	// clc spit amount = total / n, where n = n+
}
function reset1() {
	window.location.reload();
}


