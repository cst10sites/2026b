// Game states: wait, started, ended 

let gameState = "wait"; 

 

let startTime; 

let endTime; 

let timerInterval; 

 

const gameArea = document.getElementById("gameArea"); 

const reactionButton = document.getElementById("reactionButton"); 

const resetButton = document.getElementById("resetButton"); 

const timerDisplay = document.getElementById("timer"); 

const messageDisplay = document.getElementById("message"); 

 

// Random delay around 5 seconds 

let randomDelay = Math.random() * 5000 + 2000; 

 

// Starting screen color 

document.body.style.backgroundColor = "lightblue"; 

gameArea.style.backgroundColor = "lightgray"; 

 

// Change to started state after random delay 

setTimeout(() => { 

    if (gameState === "wait") { 

        gameState = "started"; 

 

        // Change BOTH page and game areaop colors when timer starts 

        document.body.style.backgroundColor = "orange"; 

        gameArea.style.backgroundColor = "red"; 

 

        messageDisplay.textContent = "CLICK NOW!"; 

        startTime = new Date().getTime(); 

 

        // Live timer update 

        timerInterval = setInterval(() => { 

            let currentTime = new Date().getTime(); 

            let reactionTime = (currentTime - startTime) / 1000; 

            timerDisplay.textContent = `Reaction Time: ${reactionTime.toFixed(3)} seconds`; 

        }, 10); 

    } 

}, randomDelay); 

 

// Reaction button 

reactionButton.addEventListener("click", function () { 

 

    // Pressed too early 

    if (gameState === "wait") { 

        gameState = "ended"; 

        messageDisplay.textContent = "Too Soon! Game Over!"; 

        gameArea.style.backgroundColor = "black"; 

        document.body.style.backgroundColor = "gray"; 

    } 

 

    // Correct timing 

    else if (gameState === "started") { 

        gameState = "ended"; 

        endTime = new Date().getTime(); 

 

        clearInterval(timerInterval); 

 

        let finalReactionTime = (endTime - startTime) / 1000; 

 

        timerDisplay.textContent = `Your Final Reaction Time: ${finalReactionTime.toFixed(3)} seconds`; 

        messageDisplay.textContent = "Great job!"; 

 

        // Final success colors 

        gameArea.style.backgroundColor = "green"; 

        document.body.style.backgroundColor = "lightgreen"; 

    } 

}); 

 

// Reset button reloads page 

resetButton.addEventListener("click", function () { 

    location.reload(); 

}); 