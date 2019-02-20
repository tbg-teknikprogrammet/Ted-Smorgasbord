var first = 0;
var second = 0;
var goal = 4;

document.querySelector("#first").innerhtml = first;
document.querySelector("#second").innerhtml = second;

document.querySelector("contender").addEventListener("click", function() {
    first += 1;
    document.querySelector("#first").innerhtml = first;
}
// while(first != goal || second != goal) {
//     var btn = document.querySelector("#first");

//     btn.addEventListener("click", function() {
//         document.querySelector("#h1").innerHTML = "Yay!";
//         first = first + 1;
//     });
//     if(first = 1){
//         document.querySelector("#h1").innerHTML = "Yay!";
//     }
//     else if(second = 1) {
//         document.querySelector("#h1").innerHTML = "Yay!";
//     }
//     else {
//         document.querySelector("#h1").innerHTML = "Yay!";
//     }
// }