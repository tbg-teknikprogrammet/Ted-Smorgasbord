// // Suppose we wanted to model a single person; name, age and city
// var person = ["sid", 31, "EagleShieldBay"];

// // Retrieve data from person

// // Hometown
// console.log(person[2]);

// // Reverse the order of data
// var person2 = [31, "livelong", "Bill"];

// // Hometown
// console.log(person2[2]);

// // To model a person is the perfect use case for an object
// var person = {
//     name: "Bob", // Key:value pair nyckel:värde-par
//     age: 29,
//     hometown: "Heresneezedduck"
// };

// // Note: Unlike arrays, objects have no order
// // The key/value pairs are just floating around inside the object

// // Retrieve data from object with the dot notation
// console.log("This person's name is: " + person.name);

// console.log(person.age);

// person.age += 1;

// console.log(person.age);

// person.hometown = "Buy a harbour";

// // Like arrays, there are a few methods of initializing objects

// // Make an empty object and assign key/value pair to is
// var oddNums = {};
// oddNums.int = 1;
// oddNums.str = "one";
// oddNums.isOdd = true;

// // All at once
// var dog = {
//     name: "Doggo",
//     Breed: "Golden",
//     Age: 3,
//     isFriendly: true
// }

// var cat = new Object();
// cat.name = "Smilla";
// cat.breed = "Skogskatt";
// cat.age = 4;
// cat.isLazy = true;

// // Objects can hold all sorts of data
// var junkObject = {
//     name: "Junko",
//     age: 33,
//     color: "Space grey",
//     isEvil: true,
//     friends: ["Daruk", "Revali", "Urbosa"],
//     pet: {
//         name: "Challe",
//         species: "Gris",
//         age: 9
//     }
// }

// console.log(junkObject.pet.species);
// console.log(junkObject.friends[2]);
// console.log(junkObject.isEvil);

// // 1. Create an array of posts (author, title, comments) where each index is an object

// var posts = [
//     {
//         author: "Ted",
//         title: "God's plan",
//         comments: ["God does not exist", "yeet"]
//     },
//     {
//         author: "Emanuel",
//         title: "Leg",
//         comments: ["Very cool", "Cool story", "ingenius"]
//     },
//     {
//         author: "God",
//         title: "Ted's plan",
//         comments: ["Ted does not exist", "yeetus"]
//     }
// ];

// // 2. arrays and objects is often used in conjunction with each other
// // arrar[index].objectProperty[index]
// console.log(posts[1].comments[0]);

// for(var i = 0; i < posts.length; i++) {
//     console.log(posts[i].title, posts[i].author, posts[i].comments,);
// }

var moviereview = [
    {
        title: "Rackartyg i Mala",
        rating: "95",
        seen: true
    },
    {
        title: "Lost in Asia",
        rating: "75",
        seen: false
    },
    {
        title: "Oshiri taberu jin",
        rating: "100",
        seen: true
    },
    {
        title: "Jesus strikes back",
        rating: "42",
        seen: false
    },
    {
        title: "HTML hacker",
        rating: "68",
        seen: true
    },
];

// for(var i = 0; i <= moviereview.length-1; i++) {
//     if(moviereview[i].seen == true){
//         console.log("You have seen " + moviereview[i].title + " - " + moviereview[i].rating + " points")
//     }
//     else
//         console.log("You have not seen " + moviereview[i].title + " - " + moviereview[i].rating + " points");
// }

function watchCheck(moviereview) {
    if(moviereview.seen == true) {
        console.log("You have seen " + moviereview.title + " - " + moviereview.rating + " points");
    }
    else
        console.log("You have not seen " + moviereview.title + " - " + moviereview.rating + " points");
}

moviereview.forEach(watchCheck);

// moviereview.forEach(function(film) {
//     if(film.seen == true) {
//         console.log("You have seen " + film.title + " - " + film.rating + " points")
//     }
//     else
//         console.log("You have not seen " + film.title + " - " + film.rating + " points");
// });