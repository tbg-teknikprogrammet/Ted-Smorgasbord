var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Yay! I've been clicked!";
});

var lis = document.querySelectorAll("li");

// lis[0].addEventListener("click", function() {
//     lis[0].style.textDecoration = "line-through";
// });

// lis[1].addEventListener("click", function() {
//     lis[1].style.textDecoration = "line-through";
// });

// lis[2].addEventListener("click", function() {
//     lis[2].style.textDecoration = "line-through";
// });

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.textDecoration = "line-through";
    });
}

var btnToggle = document.querySelector("#btnToggleBg");
var isPurple = false;

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggleBg");
    // if(isPurple) {
    //     document.getElementsByTagName("body")[0].style.background = "#34495e"
    // }
    // else {
    //     document.getElementsByTagName("body")[0].style.background = "#663399"
    // }
    // isPurple = !isPurple;
});