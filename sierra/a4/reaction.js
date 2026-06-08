var gameState = "wait"; // "wait", "started", "ended"

    	function react() {
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"

			if (gameState == "wait") {
				// clicked too early
				document.getElementById("output").innerHTML = "Game Over!";
				gameState = "ended";
			}

			else if (gameState == "started") {
				// stop the timer
				var endTime = new Date();
				var reactionTime = (endTime - startTime) / 1000;

				document.getElementById("output").innerHTML =
					"Reaction time: " + reactionTime.toFixed(3);

				gameState = "ended";
			}
    		
    	}

    	/* This code changes the background color to newColor!

	   Explanation: updateBackground is called every 0.1 sec by default
	   and generates a random decimal number between 0 and 1. If it
	   generates a number less than tolerance, it will change
	   the background color. The actual time it takes to change color is
	   random but by default its average time is
	   [interval time in sec] / [probability] = 0.1 / 0.02 = 5 seconds.
    	*/

    	var newColor = "green";
    	var startTime; //refer to stopwatch (lesson 7)

    	function updateBackground() {
			if (Math.random() < 0.02 && gameState == "wait") {
				document.body.style.backgroundColor = newColor;
				gameState = "started";
				startTime = new Date(); // set ONCE
			}

			if (gameState == "started") {
				var currentTime = new Date();
				var timePassed = (currentTime - startTime) / 1000;

				document.getElementById("output").innerHTML =
					"Time: " + timePassed.toFixed(3);
			}
		}

		function resetID() {
			document.getElementById('output').innerHTML = "";
			document.body.style.backgroundColor = "white";
			gameState = "wait";
		}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);