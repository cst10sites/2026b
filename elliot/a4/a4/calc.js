function calculate() {
	// 1. Get subtotal
	var subtotal = Number(document.getElementById('subtotal').value);

	// Optional safety check
	if (isNaN(subtotal) || subtotal <= 0) {
		document.getElementById('afterTax').textContent = "After Tax: $0.00";
		document.getElementById('afterTip').textContent = "After Tip: $0.00";
		document.getElementById('perPerson').textContent = "Per Person: $0.00";
		return;
	}

	// 2. GST (5%)
	var gst = 0.05 * subtotal;
	
	var afterGST = subtotal + gst;

	// 3. Get tip from dropdown
	var tipRate = Number(document.getElementById("tipValue").value);
	var tipAmount = afterGST * tipRate;

	// 4. Total after tip
	var total = afterGST + tipAmount;

	// 5. Split
	var split = parseInt(document.getElementById("split").value);

	if (isNaN(split) || split < 1) {
		split = 1;
	}

	split = Math.floor(split);

	var perPerson = total / split;


	// 6. Output everything
	document.getElementById('afterTax').textContent =
    "After Tax: $" + afterGST.toFixed(2);

	document.getElementById('afterTip').textContent =
    "After Tip: $" + total.toFixed(2);

	document.getElementById('perPerson').textContent =
    "Per Person: $" + perPerson.toFixed(2);
   }

function resetForm() {
	document.getElementById("subtotal").value = "";
	document.getElementById("split").value = 1;
	document.getElementById("tipValue").value = "0.00";

	document.getElementById("afterTax").textContent = "After Tax: $0.00";
	document.getElementById("afterTip").textContent = "After Tip: $0.00";
	document.getElementById("perPerson").textContent = "Per Person: $0.00";
}

window.onload = function() {
	document.getElementById("subtotal").addEventListener("input", calculate);
	document.getElementById("tipValue").addEventListener("change", calculate);
	document.getElementById("split").addEventListener("input", calculate);

	resetForm();
};