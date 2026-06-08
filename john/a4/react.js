var gameState = "wait";
var newColor = "red";
var showTime = -1;
var intervalID = setInterval(updateBackground, 100);
var timerID;

function updateBackground() {
    if (Math.random() < 0.03 && gameState == "wait") {
        document.body.style.backgroundColor = newColor;

        showTime = 0;
        gameState = "started";

        document.getElementById("btnClick").innerHTML = "Click"

        clearInterval(intervalID);
        timerID = setInterval(count, 10);
    }
}

function count() {
    showTime += 0.01;
    document.getElementById("output").innerHTML = showTime.toFixed(2) + "s";
}

function resetTimer() {
	showTime = 0
	document.getElementById("output").textContent = "";
	window.location.reload();
}

function react() {
	if (showTime < 0) {
		clearInterval(intervalID);
		document.getElementById("output").textContent = "Too early! Try again!";
	}

	else {
		clearInterval(timerID);
	}

	gameState = "ended"
}