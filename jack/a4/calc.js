function calculate() {
    var subtotalInput = document.getElementById('subtotal').value;
    var tipInput = document.getElementById("tipvalue").value;
    var patronsInput = document.getElementById("people").value;


    var invalidPattern = /[^0-9.]/;

    if (invalidPattern.test(subtotalInput) || 
        invalidPattern.test(tipInput) || 
        invalidPattern.test(patronsInput)) {

        document.getElementById('final').innerHTML = "no";
        return;
    }

    var subtotal = Number(subtotalInput);
    var tipPercent = Number(tipInput);
    var patrons = Number(patronsInput);

    var gstfinal = 0.05 * subtotal;
    var tipamount = subtotal * tipPercent;
    var totalbill = subtotal + gstfinal + tipamount;

    var finalText = "";

    if (patrons === 1) {
        finalText = "without Split: $" + totalbill.toFixed(2);
        document.getElementById('totalamount').innerHTML = "";
    } else {
        var finalperperson = totalbill / patrons;

        document.getElementById('totalamount').innerHTML =
            "without Split: $" + totalbill.toFixed(2);

        finalText = "per person: $" + finalperperson.toFixed(2);
    }
    
    document.getElementById('final').innerHTML = finalText;

    document.getElementById('taxamount').innerHTML =
        "after tax: $" + gstfinal.toFixed(2);
}