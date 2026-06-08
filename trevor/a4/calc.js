<script> 

    function calculateTotal() { 

      var subtotal = parseFloat(document.getElementById("subtotal").value) || 0; 

      var tipPercent = parseFloat(document.getElementById("tip").value); 

      var split = parseInt(document.getElementById("split").value); 

 

      var gst = subtotal * 0.05; 

      var afterTax = subtotal + gst; 

      var tipAmount = afterTax * (tipPercent / 100); 

      var totalAfterTip = afterTax + tipAmount; 

    var perPerson = totalAfterTip / split; 

 

      document.getElementById("taxAmount").innerText = 

        `+ GST(5%): $${gst.toFixed(2)}`; 

 

      document.getElementById("afterTax").innerText = 

        `After Tax Total: $${afterTax.toFixed(2)}`; 

 

      document.getElementById("totalAfterTip").innerText = 

        `Total After Tip: $${totalAfterTip.toFixed(2)}`; 

 

      document.getElementById("splitAmount").innerText = 

        `Per Person: $${perPerson.toFixed(2)}`; 

    } 

 

    function resetCalculator() { 

      document.getElementById("subtotal").value = ""; 

      document.getElementById("tip").value = "0"; 

      document.getElementById("split").value = "1"; 

 

      document.getElementById("taxAmount").innerText = "+ GST(5%): $0.00"; 

      document.getElementById("afterTax").innerText = "After Tax Total: $0.00"; 

      document.getElementById("totalAfterTip").innerText = "Total After Tip: $0.00"; 

      document.getElementById("splitAmount").innerText = "Per Person: $0.00"; 

    } 

  </script> 

 