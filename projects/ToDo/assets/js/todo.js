// Event listener
//  While
// if()
// for
// array med tillhörande metod

document.getElementById("button").addEventListener("click", toDo)

var net = []

function toDo() {
    var command = prompt("Please give a valid command");
    while (command != "quit") {
        console.log(command)
        if (command == "del"){
            console.log("");
        }
        else if(command == "list"){
            console.log(net);
            for(var i = 0; i < net.lenght, i++;) {
                console.log("(" + i + ")" + command[i]);
            }
        }
        else if(command == "new"){
            command = prompt("Vad vill du?");
            console.log("Saved" + command + ". Very nice")
            net.push(command);
        } // Command ska skrivas in efter
    }
    console.log("See ya!")
}