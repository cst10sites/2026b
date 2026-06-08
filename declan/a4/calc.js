function calculate() {
	// calculate GST total
	var subtotal = Number(document.getElementById('subtotal').value);
		if (Number.isNaN(subtotal)) {
  	subtotal = 0;
		}
	var tax = Number(document.getElementById('tax').value);
	var people = Number(document.getElementById('people').value);
	var gst = 0.05 * subtotal;
	var afterGST = subtotal + gst;
	var final = (afterGST + (afterGST*tax))
	document.getElementById('firstOutput').innerHTML = "subtotal = $" + subtotal.toFixed(2);
	document.getElementById('secondOutput').innerHTML = "after tax = $" + afterGST.toFixed(2);
	document.getElementById('thirdOutput').innerHTML = "after tip = $" + final.toFixed(2);
	document.getElementById('fourthOutput').innerHTML = "final = $" + (final/people).toFixed(2);

	// rest of the code goes into this function
}

function resets(){
	document.getElementById('firstOutput').innerHTML = " ";
	document.getElementById('secondOutput').innerHTML = " ";
	document.getElementById('thirdOutput').innerHTML = " ";
	document.getElementById('fourthOutput').innerHTML = " ";

}

function updateSlider() {
	var ppl = document.getElementById('people').value
	document.getElementById('peopleOutput').innerHTML = ppl;
}

setInterval(updateSlider, 100);