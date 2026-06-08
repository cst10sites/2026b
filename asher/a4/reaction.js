var gameState = "wait"; // "wait", "started", "ended"
var startTime;
var newColor = "green";
var oldColor = "red";
var cheat = 0
var div = 1


document.addEventListener("keydown", function(event) {
  if (event.key === "t" || event.key === "T") {
    cheat = cheat + 0.1
    console.log("cheat")
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "g" || event.key === "G") {
    div = 2
    console.log("cheat2")
  }
});

function react() {
	if (gameState == "wait") {
		document.getElementById("timeDisplay").innerHTML = "Too Early!"
		document.body.style.backgroundColor = oldColor;
	}
	gameState = "ended";
}


document.body.style.backgroundColor = "white";


function updateBackground() {
	// DO NOT MODIFY THIS CONDITION
	if (Math.random() < 0.02 && gameState == "wait") {
		var currentTime = new Date();
		startTime = new Date();
		document.getElementById("timeDisplay").innerHTML = "Reaction Time:" + ((currentTime - startTime) / (1000/div) + cheat);
		gameState = "started";
		document.body.style.backgroundColor = newColor;

	}
}

function updateTime() {
	if (gameState == "started") {
		var currentTime = new Date();
		document.getElementById("timeDisplay").innerHTML = "Reaction Time:" + ((currentTime - startTime) / (1000/div) + cheat);
	}
}

function reset1() {
	gameState = "wait";
	document.body.style.backgroundColor = "white";
	document.getElementById("timeDisplay").innerHTML = ""
}
// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);
setInterval(updateTime, 1);
