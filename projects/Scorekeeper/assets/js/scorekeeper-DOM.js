var points1 = 0;
var points2 = 0;
var goal = 0;
var player1p = document.querySelector("#points1");
var player2p = document.querySelector("#points2");
var btn1 = document.querySelector("#player1");
var btn2 = document.querySelector("#player2");
var input = document.getElementsByTagName("input")[0];
var winner = document.querySelector("#winner")
var disclaimer = document.querySelector("#disclaimer");

input.addEventListener("input", function(){
    goal = Number(this.value);
})

btn1.addEventListener("click", function(){
    if (goal < 1) {
        disclaimer.style.visibility = "visible";
    }
    else {
        disclaimer.style.visibility = "hidden";
        input.disabled = true;
        if (points1 < goal-1){
            points1++;
            player1p.innerHTML = points1;   
        }
        else {
            points1++;
            player1p.innerHTML = points1;
            winner.innerHTML = "Player 1 won.";
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

btn2.addEventListener("click", function() {
    if (goal < 1) {
        disclaimer.style.visibility = "visible";
    }
    else {
        disclaimer.style.visibility = "hidden";
        input.disabled = true;
        if (points2 < goal-1){
            points2++;
            player2p.innerHTML = points2;   
        }
        else {
            points2++;
            player2p.innerHTML = points2;
            winner.innerHTML = "Player 2 won.";
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

document.querySelector("#reset").addEventListener("click", function(){
    points1 = 0;
    points2 = 0;
    player1p.innerHTML = points1;
    player2p.innerHTML = points2;
    btn1.disabled = false;
    btn2.disabled = false;
    input.disabled = false;
    winner.innerHTML = "";
})