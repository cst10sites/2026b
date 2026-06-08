
    var gameState = "wait"; // "wait", "started", "ended"
    var startTime = 0;

    function react() {
      if (gameState == "wait") {
        document.getElementById("output").innerHTML = "Too soon! Game over.";
        gameState = "ended";
      } 
      else if (gameState == "started") {
        var reactionTime = Date.now() - startTime;
        document.getElementById("output").innerHTML = "Your reaction time: " + reactionTime + " ms";
        gameState = "ended";
      }
    }

    function resetGame() {
      location.reload();
    }

    var newColor = "red";

    function updateBackground() {
      // DO NOT MODIFY THIS CONDITION
      if (Math.random() < 0.02 && gameState == "wait") {
        document.body.style.backgroundColor = newColor;

        startTime = Date.now(); // start timer
        document.getElementById("output").innerHTML = "CLICK NOW!";
        gameState = "started";
      }
    }

    // DO NOT MODIFY THIS LINE
    setInterval(updateBackground, 100);

  