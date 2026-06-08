function calculate() {
			var subtotal = Number(document.getElementById('subtotal').value);

			var gst = 0.05 * subtotal;

			var afterGST = subtotal + gst;

			document.getElementById('firstOutput').innerHTML = "$" + afterGST.toFixed(2);

			var tipPercent = Number(document.getElementById('tipValue').value);

			var tipAmount = afterGST * (tipPercent / 100);

			var split = Number(document.getElementById('split').value);

			var finalTotal = (afterGST + tipAmount) / split;

			document.getElementById('secondOutput').innerHTML = "$" + finalTotal.toFixed(2);
		}