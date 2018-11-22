// var friend1 = "Måns";
// var friend2 = "Sten";
// var friend3 = "Claes";
// var friend4 = "Måna";

// var friends = ["Måns", "Sten", "Claes", "Måns syster Måna"];

// console.log(friends[0] + " <3 " + friends[3]);

// friends[0] = "Göran";

// console.log(friends[0] + " <3 " + friends[3]);

// var colors = ["red", "green", "blue"];
// console.log(colors);

// colors.push("purple");
// console.log(colors);

// colors.pop();
// console.log(colors);

// colors.unshift("Yellow");
// console.log(colors);

// colors.shift();
// console.log(colors);

// console.log(colors.indexOf("green"))

// var fruits = ["Banana", "Orange", "Lemon", "Mango", "Pearl"]

// var citrus = fruits.slice([1], [3]);

// console.log(citrus);

// var cars = ["Audi A6", "Volvo 940", "Ford Mondeo", "Ferrari", "Landa", "Lada", "Citroên"];
// for(var i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
// countries.forEach(function(country) {
//     console.log(country);
// });

// function countryList(country) {
//     console.log("*************");
//     console.log(country);
//     console.log("*************")
//     console.log("");
// }

// countries.forEach(countryList);

var things = ["T", "N", "A", "P", "D"];
console.log(things);

function printReverse(things) {
    for(var i = things.length -1; i >= 0; i--) {
        console.log(things[i]);
    }
}

printReverse(things);