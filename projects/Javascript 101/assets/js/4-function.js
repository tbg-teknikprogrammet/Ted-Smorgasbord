// // Föräldern sjunger och barnet lyssnar
// console.log("Blinka lilla stjärna där.");
// console.log("Blinka lilla stjärna där.");
// console.log("Hur jag undrar var du är.");
// console.log("Fjärran lockar du min syn.");
// console.log("Likt en diamant i skyn.");

// // Barnet nynnar med
// console.log("Blinka lilla stjärna där.");
// console.log("Blinka lilla stjärna där.");
// console.log("Hur jag undrar var du är.");
// console.log("Fjärran lockar du min syn.");
// console.log("Likt en diamant i skyn.");

// // Nu sjunger barnet den helt själv
// console.log("Blinka lilla stjärna där.");
// console.log("Blinka lilla stjärna där.");
// console.log("Hur jag undrar var du är.");
// console.log("Fjärran lockar du min syn.");
// console.log("Likt en diamant i skyn.");

// THIS CODE IS WET! Write everything twice
// Eftersträva att er kod är DRY! Don't Repeat Yourself
// function twinkleTwinkle() {
//     console.log("Blinka lilla stjärna där.");
//     console.log("Blinka lilla stjärna där.");
//     console.log("Hur jag undrar var du är.");
//     console.log("Fjärran lockar du min syn.");
//     console.log("Likt en diamant i skyn.");
// }

// // // Call a function
// twinkleTwinkle();
// twinkleTwinkle();
// twinkleTwinkle();

// // Deklerera en funktion
// function doSomething() {
//     console.log(" ");
//     console.log("Hello World!");
//     console.log("I'm doing something...")
// }

// // Anropa funktionen
// doSomething();
// // Visar innehållet i funktionen
// doSomething

// // Parameter och Argument
// function square(num, num1) {
//     console.log(num * num1)
// }

// // Anropar funktionen med två stycken argument
// square(0.5, 10);

// function sayHello(name) {
//     console.log("Hello there!  " + name);
// }

// // Anropar funktionen med ett argument, i form av en string
// sayHello("General Kenobi.");

// function area(lenght, height) {
//     console.log("The area of: " + lenght + " and " + height + " is: " + lenght * height);
// }

// area(5, 10)

// function greet(person1, person2, person3, person4) {
//     console.log("Hej, " + person1 + "!")
//     console.log("Hej, " + person2 + "!")
//     console.log("Hej, " + person3 + "!")
//     console.log("Hej, " + person4 + "!")
// }

// Greet("Boi", "Man", "Tomsson", "Beaver")

// function squared(x) {
//     return x * x;
// }

// console.log("4 squared is: " + square(4))

// var result = squared(10);
// console.log(result);

/*
******************************
functions - skriftligt test
******************************
*/

// function isEven(yeet) {
//     if(yeet % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(54));

// function kebabToSnake(papa) {
//     var yeet = papa.replace(/ wanna be /g, " am already ")
//     return yeet;
// }

// kebabToSnake("I wanna be Tracer")

// function localScope() {
//     var showScore = 31;
//     console.log(showScope);
// }

// localScope();
// console.log(showScope);

// var showScopeY = 99;
// function localScopeY() {
//     showScopeY = 100;
//     console.log(showScopeY);
// }

// console.log(showScopeY);
// localScopeY();

function sing() {
    console.log("I'm singing in the rain!");
    console.log("I do not know the lyrics!");
}

// setInterval(sing, 3000);

// var anom = setInterval(function() {
//     console.log("I'm an anonymous function!")
// }, 1);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function() {
    clearInterval(myTime);
});

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000)
});