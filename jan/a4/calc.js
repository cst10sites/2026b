function calculate() {
var subtotal = Number(document.getElementById('subtotal').value);
var gst = 0.05 * subtotal;
var afterGST = subtotal + gst;
var tipChoice = document.getElementById("tipValue").value;
var tip = 0;
if (tipChoice === "None") {
    tip = 0;
} else if (tipChoice === "Fair") {
    tip = 0.10 * afterGST;
} else if (tipChoice === "Good") {
    tip = 0.15 * afterGST;
} else if (tipChoice === "Excellent") {
    tip = 0.20 * afterGST;
}
var afterTip = afterGST + tip;
var split = document.getElementById("splitValue").value;
var afterSplit = afterTip / split;
document.getElementById('firstOutput').innerHTML = "$ " + afterGST.toFixed(2);
document.getElementById('secondOutput').innerHTML = "$ " + afterTip.toFixed(2);
document.getElementById('thirdOutput').innerHTML = "$ " + afterSplit.toFixed(2);
}
function reset() {
    document.getElementById('subtotal').value = '';
    document.getElementById('tipValue').selectedIndex = 0;
    document.getElementById('splitValue').selectedIndex = 0;

    document.getElementById('firstOutput').innerHTML = '';
    document.getElementById('secondOutput').innerHTML = '';
    document.getElementById('thirdOutput').innerHTML = '';
}