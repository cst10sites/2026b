		/* Summary:
			1. Number(aStr): converts text to a number (for arithmetic)
			2. aNumber.toFixed(2): converts a number to text with 2 decimal places
		*/

		function calculate() {
				// 1. calculate GST total
				var subtotal = Number(document.getElementById('subtotal').value);
				var gst = 0.05 * subtotal;
				var afterGST = subtotal + gst;
				document.getElementById('firstOutput').innerHTML = "After GST = $" + afterGST.toFixed(2);

				// 2. calculate tip
				var tipPercent = Number(document.getElementById("tipPercent").value);
				var tipAmount = afterGST * tipPercent;
				document.getElementById('tipOutput').innerHTML = "Tip = $" + tipAmount.toFixed(2);

			// 3. calculate total = afterGST + tipAmount

				var plusTip = afterGST + tipAmount
				document.getElementById('plusTip').innerHTML = "Total = $" + plusTip.toFixed(2);


			// 4. calculate split = total / n, where n = 1 - 8

				var peopleSplit = Number(document.getElementById("peopleSplit").value);
				var plusPeople = plusTip / peopleSplit
				document.getElementById('plusPeople').innerHTML = "Amount per person = $" + plusPeople.toFixed(2)

		// rest of the code goes into this function
		}

		function resetIDs() {

			document.getElementById('subtotal').value = "";
			document.getElementById('tipPercent').value = "0";
			document.getElementById('peopleSplit').value = "1";

			// outputs
			document.getElementById('firstOutput').innerHTML = "";
			document.getElementById('tipOutput').innerHTML = "";
			document.getElementById('plusTip').innerHTML = "";
			document.getElementById('plusPeople').innerHTML = "";

		}