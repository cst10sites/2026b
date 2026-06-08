var gameState = "wait"; // wait, started, ended
var startTime;
var timerInterval;

function react() {
	if (gameState === "wait") {
		document.getElementById("output").innerHTML = "Too soon! Game Over.";
		gameState = "ended";
	}
	else if (gameState === "started") {
		clearInterval(timerInterval);

		let reactionTime = (Date.now() - startTime) / 1000;
		document.getElementById("timer").innerHTML = reactionTime.toFixed(3);
		document.getElementById("output").innerHTML = "Your reaction time!";

		gameState = "ended";
	}
}

function startTimer() {
	startTime = Date.now();

	timerInterval = setInterval(function () {
		let time = (Date.now() - startTime) / 1000;
		document.getElementById("timer").innerHTML = time.toFixed(3);
	}, 10);
}

function resetGame() {
	location.reload();
}

var newColor = "red";

function updateBackground() {
	if (Math.random() < 0.02 && gameState == "wait") {
		document.body.style.backgroundColor = newColor;

		startTimer(); // start stopwatch
		gameState = "started";
		document.getElementById("output").innerHTML = "CLICK NOW!";
	}
}

setInterval(updateBackground, 100);