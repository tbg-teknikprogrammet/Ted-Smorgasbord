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

var slidin = ["assets/images/Sneaky.jpg", "assets/images/rarara.jpg", "assets/images/hot.jpg"]

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