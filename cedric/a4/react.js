  	var gameState = "wait"; // "wait", "started", "ended"
    	var nclicks=0
    	var timepassed
    	function react() {
    		// Need to implement
    		// 1. display game over if the button is pressed too soon
    		// 2. stop the timer if the start has already been started
    		// 3. change gameState to "ended"
    		if (gameState == "wait"){

    			document.getElementById('output').innerHTML = "try again";
    			gameState = "ended";

    		}
    		if (gameState == "started"){
    			gameState ="ended"
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

    	var newColor = "red";
    	var starttime; // lesson 7
    	var currentTime

    function reset(){
    	window.location.reload();
    }
    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		if (Math.random() < 0.02 && gameState == "wait") {
    			 var btn = document.getElementById("buttonID");
    			// Need to implement:
    			// 0. change background color to red (done)
    			// 1. start the timer
    			// 2. show the timer on the screen; need place in HTML
    			// 3. change gameState to "started"
    			document.body.style.backgroundColor = newColor;
    			gameState = "started"
    			starttime = new Date()
    			btn.textContent = "click"; 



    		}
    		if (gameState == "started"){	
    			var currentTime = new Date();
    			//!. update current time
    			//display time passed time passed = currentime - startime
    			timepassed = currentTime - starttime
    			document.getElementById("output").innerHTML = timepassed/1000 + "s";
    		
    		}

    	}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);

