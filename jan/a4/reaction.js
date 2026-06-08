var gameState = "wait";

    	function react() {
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
    		if (gameState == "wait") {
    			document.getElementById("output").innerHTML = "Game Over!";
    			gameState = "ended";

    		} 
    		else if (gameState == "started") {
        	var endTime = new Date();
        	var reactionTime = (endTime - startTime) / 1000;
        	document.getElementById("output").innerHTML = 
            "Reaction time: " + reactionTime.toFixed(3) + "s";

        gameState = "ended";
    		}
    	}

    	var newColor = "red";
    	var startTime;

    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		if (Math.random() < 0.02 && gameState == "wait") {
    			// Need to implement:
    			// 0. change background color to red (done)
    			// 1. start the timer
    			// 2. show the timer on the screen; need place in HTML
    			// 3. change gameState to "started"
    			document.body.style.backgroundColor = newColor;
    			gameState = "started";
    			startTime = new Date();
    	}
    }


    	function reset() {
		window.location.reload();
		}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);