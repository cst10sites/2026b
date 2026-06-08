console.log("JS loaded");
	var gameState = "wait"; // "wait", "started", "ended"

function react() {
    if (gameState == "wait") {
        document.getElementById("output").innerHTML = "Game Over!";
        gameState = "ended";
    }

    else if (gameState == "started") {
        gameState = "ended";
    }
}

		    if (gameState == "started") {
		    	gameState = "ended"
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
		var startTime;


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
		        startTime = new Date();; //refer to lession 7
		    }

		    if (gameState == "started") {
		        // update current time
		        //display timePassed = (curent time - start time) in id="output"
		        var currentTime = new Date()
		        document.getElementById("output").innerHTML = (currentTime - startTime) / 1000; // startTime;

		    }
		}

	function reset() { 
	window.location.reload();
}

		// DO NOT MODIFY THIS LINE
		setInterval(updateBackground, 100);
