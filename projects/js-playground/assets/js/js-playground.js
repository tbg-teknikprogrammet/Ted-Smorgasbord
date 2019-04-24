// function openBox() {
//     document.querySelector(".stepbro").addEventListener("click", function(){
//         document.querySelector(".light").style.diplay = 'block';
//     })
//   }

//   openBox();

// document.querySelectorAll(".light").style.diplay = "block";


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
        document.querySelector(".dang").style.background = "red";
    }
    else if(event.which == 76) {
        document.querySelector(".dang").style.background = "lime";
    }
    else if(event.which == 67) {
    }
    else {
        console.log("Oi")
    }
})