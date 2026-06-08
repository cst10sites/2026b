function calculate() {
	// calculate GST total
	var subtotal = Number(document.getElementById('subtotal').value) || 0;
	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;
	document.getElementById('firstOutput').innerHTML = "Total before Tip: $" + afterGST.toFixed(2);

	//calculate the tip amount after tax
	var tipPercent = Number(document.getElementById("Tip").value);
	var tipAmount = afterGST * tipPercent;
	var total = afterGST + tipAmount;
	document.getElementById("tipOutput").innerHTML = "Total after Tip: $" + total.toFixed(2);
	// calculate split amount
	var split = Number(document.getElementById("spiltvalue").value);
	var splitAmount = total / split;
	document.getElementById("spiltOutput").innerHTML =
"Each person pays: $" + splitAmount.toFixed(2);
}