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