var gameState = "wait"; // "wait", "started", "ended"
var startTime;
var gameActive = false; // added for start button

// start button function
function startGame() {
    gameState = "wait";
    gameActive = true;

    document.body.style.backgroundColor = "white";
    document.getElementById("output").innerText = "Wait for the color change...";
    document.getElementById("timer").innerText = "0.000";
}

function react() {
    // Need to implement
    // 1. display game over if the button is pressed too soon
    // 2. stop the timer if the start has already been started
    // 3. change gameState to "ended"

    if (!gameActive) {
        return; // prevents clicking before start
    }

    if (gameState == "wait") {
        document.getElementById("output").innerText = "Too soon!";
        gameState = "ended";
        gameActive = false;
    }

    else if (gameState == "started") {
        var endTime = Date.now();
        var reactionTime = (endTime - startTime) / 1000;

        document.getElementById("output").innerText = "Your reaction time:";
        document.getElementById("timer").innerText = reactionTime.toFixed(3);

        gameState = "ended";
        gameActive = false;
    }
}

// reset button
function resetGame() {
    location.reload();
}

/* This code changes the background color to newColor!

Explanation: updateBackground is called every 0.1 sec by default
and generates a random decimal number between 0 and 1. If it
generates a number less than tolerance, it will change
the background color. The actual time it takes to change color is
random but by default its average time is
[interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
*/

var newColor = "red";

function updateBackground() {
    // DO NOT MODIFY THIS CONDITION
    if (Math.random() < 0.02 && gameState == "wait" && gameActive == true) {
        // Need to implement:
        // 0. change background color to red (done)
        // 1. start the timer
        // 2. show the timer on the screen; need place in HTML
        // 3. change gameState to "started"

        document.body.style.backgroundColor = newColor;

        startTime = Date.now();
        document.getElementById("output").innerText = "CLICK NOW!";
        gameState = "started";
    }
}

// DO NOT MODIFY THIS LINE
setInterval(updateBackground, 100);