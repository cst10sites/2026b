var gameState = "wait";
var startTime;
var timerInterval;

function react() {

	if (gameState == "wait") {

		document.getElementById("output").innerHTML =
		"Too soon";
		gameState = "ended";
	}

	else if (gameState == "started") {

		var endTime = new Date();
		var reactionTime = (endTime - startTime) / 1000;
		clearInterval(timerInterval);
		document.getElementById("output").innerHTML =
			"Your reaction time: "
			+ reactionTime.toFixed(3)
			+ " seconds";

		gameState = "ended";
	}

}

function resetGame() {

	window.location.reload();
} 

function updateTimer() {

	var currentTime = new Date();
	var timeElapsed = (currentTime - startTime) / 1000;
	document.getElementById("output").innerHTML =
		"Time: " + timeElapsed.toFixed(3) + " seconds";

} 

function updateBackground() {

	if (Math.random() < 0.02 && gameState == "wait") {

		document.body.style.backgroundColor = "red";

		startTime = new Date();

		timerInterval = setInterval(updateTimer, 10);

		gameState = "started";
	}

} 
setInterval(updateBackground, 100);