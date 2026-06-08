var startTime;
var state = "0"; // 0 = idle 1 = waiting 2 = ready for user to click IDK why i did it like ts
var highscore = 100000; // just so the if statement on line 30 runs and its easier 2 do this

function startTest() {
    document.getElementById('score').innerHTML = "wait for green";
    document.body.style.backgroundColor = "white";

    state = "1";
    var delay = Math.random() * 3000 + 1000; //1001-3000 - 1-3 seconds

    setTimeout(function () {
        document.body.style.backgroundColor = "green";
        startTime = new Date().getTime();
        state = "2";
    }, delay);
}

function clickTest() {
    if (state === "1") {
        document.getElementById('score').innerHTML = "too early stop";
        reset();
    }  

    else if (state === "2") {
        var reactionTime = (new Date().getTime() - startTime) / 1000;

        document.getElementById('score').innerHTML = "time: " + reactionTime;

        if (reactionTime < highscore) {
            highscore = reactionTime;
            document.getElementById('highscore').innerHTML = "highscore: " + highscore;
        }

        reset();
    }
}

function reset() {
    state = "0";
    document.body.style.backgroundColor = "white";
}