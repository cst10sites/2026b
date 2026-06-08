var gameState = "wait"; // "wait", "started", "ended"
var startTime; //refer to stopwatch (lesson 7)
var waitStart = new Date();

function react() {
	if (gameState == "wait"){
		document.getElementById("output").innerHTML = "Game Over!";
		gameState="ended";
	}
	else if (gameState == "started"){
		var currentTime = new Date();
		var timePassed = (currentTime - startTime) / 1000;

		document.getElementById("output").innerHTML = "Your time: " + timePassed;

		gameState = "ended";
	}
}

function reset(){
	document.getElementById("output").innerHTML = "";

	gameState = "wait";
	startTime = new Date();
	waitStart = new Date();

	document.body.style.backgroundColor= "white";
}

var newColor = "green";

function updateBackground() {
	// DO NOT MODIFY THIS CONDITION
	if (Math.random() < 0.02 && gameState == "wait") {
		// Need to implement:
		// 0. change background color to red (done)
		// 1. start the timer (done)
		// 2. show the timer on the screen; need place in HTML
		// 3. change gameState to "started"

		document.body.style.backgroundColor = newColor;
		gameState = "started";

		startTime = new Date(); //refer to lesson 7

		document.getElementById("output").innerHTML = "CLICK NOW!";
	}

	if(gameState =="started"){
		// 1.update currentTime
		var currentTime = new Date();

		//2.display timePassed = (currentTime - startTime) in id="output"
		var timePassed = (currentTime - startTime) / 1000;

		document.getElementById("output").innerHTML = "Time: " + timePassed;
	}
}


// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);