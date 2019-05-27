//Box 1: Lightshow, when you click the image the image gets bigger

var darkmode = document.querySelector("#dark");
var lightmode = document.querySelector("#light");
var bac = document.querySelector(".back");
var forwa = document.querySelector(".forw");
var clicky = document.querySelector(".click")

darkmode.style.cursor = "pointer";

darkmode.addEventListener("click", function() {
    lightmode.style.visibility = "visible";
    bac.style.visibility = "hidden";
    forwa.style.visibility = "hidden";
    clicky.style.visibility = "hidden";
})

lightmode.addEventListener("click", function() {
    lightmode.style.visibility = "hidden";
    bac.style.visibility = "visible";
    forwa.style.visibility = "visible";
    clicky.style.visibility = "visible";
})


//Box 2: A slideshow, click an arrow and see the image change.

var slide = document.querySelector("#slide");
var backTrack = document.querySelector(".back");
var forwTrack = document.querySelector(".forw");
var slidin = ["assets/images/hot.jpg", "assets/images/rarara.jpg", "assets/images/Sneaky.jpg"]
var slideIndex = 0;

slide.setAttribute("src", slidin[slideIndex])
backTrack.addEventListener("click", function() {
    slideIndex += 1;
    if(slideIndex > slidin.length-1) {
        slideIndex = 0;
    }
    slide.setAttribute("src", slidin[slideIndex])
})

forwTrack.addEventListener("click", function() {
    slideIndex += -1;
    if(slideIndex < 0) {
        slideIndex = slidin.length-1;
    }
    slide.setAttribute("src", slidin[slideIndex])
})


// Box 3: Listens for specific button presses and changes the colors of the page

var javaEbox = document.querySelectorAll(".jave");
var hawkeye = document.querySelectorAll(".arrow")
var i;

document.addEventListener("keydown", function(event){
    if(event.which == 78) {
        var x = javaEbox;
        for (i = 0; i < x.length; i++) {
            x[i].style.borderColor = "white";
        }
        var x = javaEbox;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "black";
        }
        var x = javaEbox;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "white";
        }
        var x = hawkeye;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "black";
        }
    }
    else if(event.which == 66) {
        var x = javaEbox;
        for (i = 0; i < x.length; i++) {
            x[i].style.borderColor = "black";
        }
        var x = javaEbox;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "white";
        }
        var x = javaEbox;
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "black";
        }
        var x = hawkeye;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "white";
        }
    }
})


//Box 4: CLick the butten and it changes position.
//I got this to work by whenever you click the button it will get a random margin and margin to that position.
//Once you click it 10 times it will give you a message.


var points = 0;

clicky.addEventListener("click", function(){
    var left = Math.random() * (+191 - -191) + -191;
    var top = Math.random() * (+121 - -121) + -121;
    clicky.style.marginLeft = left + "px";
    clicky.style.marginTop = top + "px";
    points += 1;
    document.querySelector(".box4 h5").innerHTML = points + " Clicks. You win at 10 clicks";
    if(points >= 10){
        document.querySelector(".win").style.visibility = "visible";    
    }    
})


//Box 5: A videoplayer that is controlled by a bunch of buttons and a range.
//I got this idea of my friends.
//It works by alot of pre-existing functions you can use in javascript.

var video = document.getElementById("cyber");
var plapau = document.querySelector("#play");
var playback = document.querySelector("#rewind");
var goBack = document.querySelector("#b");
var goForward = document.querySelector("#f");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var volPercent = document.querySelector("#percent");
var umute = document.querySelector("#mute");
var go = 0;
video.volume = 0.2;
vol = 20;

document.querySelector("#percent").innerHTML = " " + vol + "% "
plapau.addEventListener("click", function(){
    if(go == 0){
        video.play();
        go = 1;
        plapau.innerHTML = "Pause";
    }
    else {
        video.pause();
        go = 0;
        plapau.innerHTML = "Play";
    }
})
playback.addEventListener("click", function(){
    video.currentTime = 0;
})
goBack.addEventListener("click", function(){
    video.currentTime = video.currentTime - 5;
})
goForward.addEventListener("click", function(){
    video.currentTime = video.currentTime + 5;
})
plus.addEventListener("click", function(){
    video.volume = video.volume + 0.05;
    vol = vol + 5;
    volPercent.innerHTML = vol + "%";
})
minus.addEventListener("click", function(){
    video.volume = video.volume - 0.05;
    vol = vol - 5;
    volPercent.innerHTML = vol + "%";
})
umute.addEventListener("click", function(){
    if (video.muted == true) {
        video.muted = false;
        umute.innerHTML = "Mute";
        volPercent.innerHTML = vol + "%";
        minus.disabled = false;
        plus.disabled = false;
    }
    else {
        video.muted = true;
        umute.innerHTML = "Unmute"
        volPercent.innerHTML = 0 + "%";
        minus.disabled = true;
        plus.disabled = true;
    }
})


//Box 6: This is basically just another version of scorekeeper with some simple adjustments.

var points1 = 0;
var points2 = 0;
var goal = 0;
var player1p = document.querySelector("#points1");
var player2p = document.querySelector("#points2");
var btn1 = document.querySelector("#player1");
var btn2 = document.querySelector("#player2");
var input = document.getElementsByTagName("input")[0];
var winner = document.querySelector("#winner");
var reset = document.querySelector("#reset");

input.addEventListener("input", function(){
    goal = Number(this.value);
})

btn1.addEventListener("click", function(){
    if (goal < 1) {
        alert("Please choose how many points to win.")
    }
    else {
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
        alert("Please choose how many points to win.")
    }
    else {
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

reset.addEventListener("click", function(){
    points1 = 0;
    points2 = 0;
    player1p.innerHTML = points1;
    player2p.innerHTML = points2;
    btn1.disabled = false;
    btn2.disabled = false;
    input.disabled = false;
    winner.innerHTML = "";
})