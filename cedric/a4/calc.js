/* Summary:
			1. Number(aStr): converts text to a number (for arithmetic)
			2. aNumber.toFixed(2): converts a number to text with 2 decimal places
		*/
		function reset(){
			window.location.reload();
		}
		function calculate() {
			// calculate GST total
			var subtotal = Number(document.getElementById('subtotal').value);
			var tip = Number(document.getElementById('tip').value);
			var split = Number(document.getElementById('split').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;
			var afterTip = afterGST * (tip/100 + 1)
			var total = afterTip / split
			document.getElementById('firstOutput').innerHTML = total.toFixed(2);
			document.getElementById('secondOutput').innerHTML = afterGST.toFixed(2);
			document.getElementById('thirdOutput').innerHTML = afterTip.toFixed(2);

		// rest of the code goes into this function
		}
		function move12(){
			window.open("react.html", "_blank");
		}