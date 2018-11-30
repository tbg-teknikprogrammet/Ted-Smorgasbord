// Event listener
//  While
// if()
// for
// array med tillhörande metod

document.getElementById("button").addEventListener("click", toDo)

function toDo(arr) {
    net = [1,2,3]
    var command = Array(prompt("Give a command"))
    console.log(command)
    if (command == "quit"){
        alert("See ya!")
    }
    else if(command == "list"){
        alert(net)
    }
    else if(command == "new"){
        command = prompt("Vad vill du?")
        net.push(command)
    }
}