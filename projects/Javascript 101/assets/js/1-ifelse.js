// alert("Suck yoo mom");
// var name = "Ted"; // String
// var age = 19; //Number
// // == Jämför men kollar inte datatyp
// // === Jämför och kollar datatyp

// if(age < 18) {
//     // Är påstående true - kör koden mellan måsvingarna
//     console.log("STOP! Du är " + age + " år.");
// }
// else if(age > 18 && age < 45) {
//     console.log("SHUTDOWN! YOUR AGE IS TOO COOL 4 sCHo_ol");
// }
// else {
//     // Är påstående false - kör koden här mellan måsvingarna
//     console.log("Välkommen!");
// }

// /*
// *********************
//  --- Guessng app ---
// *********************
// */

// // Deklarera en variabel
// var secretNumber = 7;
// // User input - Ta emot data
// var userInput = Number(prompt("Gissa ett nummer 1-10 d-_-b"));
// // Läsa av villkoret
// if(userInput === secretNumber) {
//     document.writeln("Grattis! Du har gissat rätt nummer! 10p");
// }
// else if(userInput > 10) {
//     document.write("何")
// }
// else if(userInput === 8) {
//     document.write("You are close my friend!")
// }
// else if(userInput === 6) {
//     document.write("You are close my homie!")
// }
// else if(userInput > secretNumber) {
//     document.writeln("Du gissade för högt! Du är inte så smart!")
// }
// else if(userInput < secretNumber) {
//     document.writeln("Du gissade för lågt! PINSAMT!")
// }
// else {
//     document.write("Fel! Gissa igen!")
// }

// var age = Number(prompt("Din ålder: "));
// if(age < 0) {
//     // Du är inte född ännu
//     document.writeln("Du är tyvär inte född ännu...")
// }
// else if(age % 2 == 0) {
// document.writeln("Din ålder är väldigt udda!");
// }
// else if(age % 2 != 0) {
//     document.writeln("Du har en jämn ålder!");
// }

/*
*********************
 --- Guessng app ---
*********************
*/

// Deklarera en variabel
var secretNumber = 7;
// User input - Ta emot data
var userInput = Number(prompt("Gissa ett nummer 1-10 d-_-b"));
// Läsa av villkoret

while(userInput !== secretNumber){
    var userInput = Number(prompt("Gissa ett nummer 1-10 d-_-b"));
    if(userInput > 10) {
        document.write("何")
    }
    else if(userInput === 8) {
        document.write("You are close my friend!")
    }
    else if(userInput === 6) {
        document.write("You are close my homie!")
    }
    else if(userInput > secretNumber) {
        document.writeln("Du gissade för högt! Du är inte så smart!")
    }
    else if(userInput < secretNumber) {
        document.writeln("Du gissade för lågt! PINSAMT!")
    }
    else {
        document.write("Fel! Gissa igen!")
    }
}
document.writeln("Grattis! Du har gissat rätt nummer! 10p");

var age = Number(prompt("Din ålder: "));
if(age < 0) {
    // Du är inte född ännu
    document.writeln("Du är tyvär inte född ännu...")
}
else if(age % 2 == 0) {
document.writeln("Din ålder är väldigt udda!");
}
else if(age % 2 != 0) {
    document.writeln("Du har en jämn ålder!");
}