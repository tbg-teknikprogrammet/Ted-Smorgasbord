var h1 = document.querySelector("h1");
// console.log(h1);
h1.style.color = "red";

var bg = document.getElementsByTagName("body")[0];
var isGreen = false;

var interval = setInterval(function() {
    if(isGreen) {
        bg.style.backgroundColor = "white";
    }
    else {
        bg.style.backgroundColor = "green";
    }
    isGreen = !isGreen
}, 1000);

bg.addEventListener("click", function(){
    clearInterval(interval);
})