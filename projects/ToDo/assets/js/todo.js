// Event listener
//  While
// if()
// for
// array med tillhörande metod

document.getElementById("button").addEventListener("click", toDo) // the toDo function starts when the button is pressed

var net = [] // The list in question

function toDo() { // When the button is pressed this function starts
    while (command != "quit") { // You will be 'trapped' in this while loop until 'quit' is typed
        console.log(command)
        if (command == "delete"){ // If delete is typed this will run
            command = prompt("Which index do you want to delete?")
            net.splice(command , 1); // Depending what the user typed for index in the previous line, that index will be removed
            console.log("Deleted " + command + ".");
        }
        else if(command == "list"){ // If list is typed this will run
            for(var i = 0; i < net.length; i++) {
                console.log("(" + i + ")" + net[i]); // Types out in the console what index and what is typed in each index
            }
        }
        else if(command == "new"){ // If new is typed this will run
            command = prompt("What do you want to add?");
            console.log("Saved " + command + ".")
            net.push(command); // Adds the input to the list in a new index
        }
        var command = prompt("Please give a valid command.");
    }
    console.log("Ending program!") // So long space cowboy
}