// Jämförelse med while är att var enbart existerar i for-loopen
// for använder man när man vet hur många gånger loopen ska köras

// for(var i = 0; i < 6; i++) {
//     console.log(i);
// }

// var str = "Hello World!";
// console.log(str);
// for(var i = 0; i < str.lenght; i++) {
//     console.log(str[i]);
// }

// var myArr = ["CSS", "HTML", "JavaScript", 1, 5, 9]
// var len = myArr.length;
// for(var i = 0; i < myArr.lenght, i++) {
//     console.log(myArr[i]);
// }

// for(var i = -10; i <= 19; i++) {
//     console.log(i);
// }

// for(var i = 10; i <= 40; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// for(var i = 300; i<= 333; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

for(var i = 5; i<= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}