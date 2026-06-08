
		function calculate() {
			// existing code (UNCHANGED)
			var subtotal = Number(document.getElementById('subtotal').value);
			var gst = 0.05 * subtotal;
			var afterGST = subtotal + gst;
			document.getElementById('firstOutput').innerHTML = afterGST.toFixed(2);

			// ADDED: tip calculation
			var tipRate = document.querySelector('input[name="tip"]:checked');
			if (tipRate) {
				tipRate = Number(tipRate.value);
			} else {
				tipRate = 0;
			}

			var tipAmount = afterGST * tipRate;
			var totalWithTip = afterGST + tipAmount;

			document.getElementById('tipOutput').innerHTML = "Tip: $" + tipAmount.toFixed(2);

			// ADDED: split bill
			var people = Number(document.getElementById('people').value);

			if (people > 0) {
				var perPerson = totalWithTip / people;
				document.getElementById('finalOutput').innerHTML = "Per Person: $" + perPerson.toFixed(2);
			} else {
				document.getElementById('finalOutput').innerHTML = "Total: $" + totalWithTip.toFixed(2);
			}
		}
