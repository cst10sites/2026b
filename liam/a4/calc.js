/* Summary:
	1. Number(aStr): converts text to a number (for arithmetic)
	2. aNumber.toFixed(2): converts a number to text with 2 decimal places
*/

function calculate() {
	// calculate GST total
	var subtotal = Number(document.getElementById('subtotal').value);
	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;
	document.getElementById('firstOutput').innerHTML = afterGST.toFixed(2);

	var tipPercent = Number(document.getElementById('tipValue').value);
	var tipAmount = afterGST * tipPercent + afterGST
	document.getElementById('tipOutput').innerHTML = tipAmount.toFixed(2);

	var splitPercent = Number(document.getElementById('splitValue').value);
	var splitAmount = tipAmount / splitPercent 
	document.getElementById('splitOutput').innerHTML = splitAmount.toFixed(2);
}
function clearOutputs() {
    document.getElementById('firstOutput').innerHTML = '';
    document.getElementById('tipOutput').innerHTML = '';
    document.getElementById('splitOutput').innerHTML = '';
}