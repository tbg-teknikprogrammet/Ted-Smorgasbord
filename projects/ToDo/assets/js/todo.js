// Event listener
//  While
// if()
// for
// array med tillhörande metod

document.getElementById("button").addEventListener("click", toDo)

var net = []

function toDo() {
    while (command != "quit") {
        console.log(command)
        if (command == "delete"){
            command = prompt("Which index do you want to delete?")
            net.splice(command , 1);
            console.log("Deleted " + command);
        }
        else if(command == "list"){
            for(var i = 0; i < net.length; i++) {
                console.log("(" + i + ")" + net[i]);
            }
        }
        else if(command == "new"){
            command = prompt("Vad vill du?");
            console.log("Saved " + command + ". Very nice")
            net.push(command);
        }
        var command = prompt("Please give a valid command");
    }
    console.log("See ya!") // So long space cowboy
}