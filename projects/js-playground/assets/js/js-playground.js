// function openBox() {
//     document.querySelector(".stepbro").addEventListener("click", function(){
//         document.querySelector(".light").style.diplay = 'block';
//     })
//   }

//   openBox();

// document.querySelectorAll(".light").style.diplay = "block";

document.querySelector("#stepbro").style.cursor = "pointer";

document.querySelector("#stepbro").addEventListener("click", function() {
    document.querySelector("#light").style.visibility = "visible"
})

document.querySelector("#light").addEventListener("click", function() {
    document.querySelector("#light").style.visibility = "hidden"
})

var slidin = ["assets/images/Isak.png", "assets/images/Isak.png", "assets/images/Isak.png"]

var slideIndex = 0;

document.querySelector("#slide").setAttribute("src", slidin[slideIndex])

document.querySelector("#darnit").addEventListener("click", function() {
    slideIndex += 1;
    if(slideIndex > slidin.length-1) {
        slideIndex = 0;
    }
    document.querySelector("#slide").setAttribute("src", slidin[slideIndex])
})

document.querySelector("#gosh").addEventListener("click", function() {
    slideIndex += -1;
    if(slideIndex < 0) {
        slideIndex = slidin.length-1;
    }
    document.querySelector("#slide").setAttribute("src", slidin[slideIndex])
})

document.addEventListener("keydown", function(event){
    if(event.which == 78) {
        document.querySelector(".box1").style.background = "red";
        document.querySelector(".box2").style.background = "red";
        document.querySelector(".box3").style.background = "red";
        document.querySelector(".box4").style.background = "red";
        document.querySelector(".box5").style.background = "red";
        document.querySelector(".box6").style.background = "red";
    }
    else if(event.which == 66) {
        document.querySelector(".box1").style.background = "darkblue";
        document.querySelector(".box2").style.background = "darkblue";
        document.querySelector(".box3").style.background = "darkblue";
        document.querySelector(".box4").style.background = "darkblue";
        document.querySelector(".box5").style.background = "darkblue";
        document.querySelector(".box6").style.background = "darkblue";
    }
    else if(event.which == 67) {
        document.querySelector(".box1").style.background = "lime";
        document.querySelector(".box2").style.background = "blue";
        document.querySelector(".box3").style.background = "red";
        document.querySelector(".box4").style.background = "white";
        document.querySelector(".box5").style.background = "black";
        document.querySelector(".box6").style.background = "yellow";
    }
    else if(event.which == 69) {
    }
    else if(event.which == 8) {
        alert("anatawageidesu")
    }
    else {
        console.log("Oi")
    }
})