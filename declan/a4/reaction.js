var gameState = "wait"; // "wait", "started", "ended"
var currentTime;
var timePassed;
var startTime;
var yousuck = 0;
var clicks = 0
var percent = 0;

    	function react() {
    		clicks = 1 
    	if (gameState == "wait") {
    		document.getElementById('output').innerHTML = " you clicked to early you are a loser";
    		gameState = "ended"
    	}else{
    	 currentTime = new Date();
    
	timePassed = (currentTime - startTime) / 1000
		document.getElementById('output').innerHTML = timePassed;
		gameState = "ended"
		percent = ((timePassed*100)-100)*-1
		document.getElementById('cool').innerHTML = "you're better than "+percent.toFixed(2)+"% of people!";
			}

    	}

    	var newColor = "green";

    	function updateBackground() {
    		// DO NOT MODIFY THIS CONDITION
    		if (clicks == 0){
window.addEventListener("click", react);
}else{
	window.addEventListener("click", reset);
}
    		if (Math.random() < 0.02 && gameState == "wait") {
    			gameState = "started"
    			document.body.style.backgroundColor = newColor;
    			startTime = new Date();
    			}
    			if (gameState == "started"){
    				yousuck += 1
    			if (yousuck == 10){
    				document.getElementById('output').innerHTML = " you didnt click in time you are a loser";
    				gameState = "ended"
    				clicks = 1 
    			}

    		}
    	}
    	function reset(){
    		window.location.reload();
    	}


    	// DO NOT MODIFY THIS LINE
    	setInterval(updateBackground, 100);



























 

