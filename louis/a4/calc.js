function calculate() {
	// 1. calculate GST total
	var subtotal = Number(document.getElementById('subtotal').value);

	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;

	document.getElementById('afterTax').innerHTML = "After Tax: $ " + afterGST.toFixed(2);

	//2. calculate tip amount, (either before tax (subtotal) or after tax (afterGST))
	var tipRate = 0;

	if(document.getElementById("tip0").checked == true){
		tipRate = 0; 
	}
	else if(document.getElementById("tip10").checked == true){
		tipRate = 0.10; 
	}
	else if(document.getElementById("tip15").checked == true){
		tipRate = 0.15; 
	}
	else if(document.getElementById("tip20").checked == true){
		tipRate = 0.20; 
	}

	var tipAmount = afterGST * tipRate;

	//3. calculate total = after GST + tipamount
	var total = afterGST + tipAmount;

	document.getElementById("afterTip").innerHTML = "After Tip: $ " + total.toFixed(2);

	//4. calculate split = total / n, where n = 1 to 8.
	var split = document.getElementById("split").value

	if(split <= 0){
		split = 1;
	}

	var perPerson = total / split;

	document.getElementById("perPerson").innerHTML = "Per Person: $ " + perPerson.toFixed(2);

	var totalAmount = perPerson;

	document.getElementById("totalAmount").innerHTML = "Total: $ " + totalAmount.toFixed(2);


	// rest of the code goes into this function
}