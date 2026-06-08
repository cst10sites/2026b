var state = "wait";
var start;
var delay = Math.random() * 5000;


setTimeout(function(){

    if(state == "wait"){

document.body.style.backgroundColor = "green";

        start = Date.now();
document.getElementById("output").innerHTML = "Click";

        state = "go";
    }
}, delay);


function react(){

if(state == "wait"){
    document.getElementById("output").innerHTML = "Too early";
        state = "done";
}

else if(state == "go"){
var reaction = Date.now() - start;
document.getElementById("output").innerHTML = reaction + " ms";

state = "done";

}

}