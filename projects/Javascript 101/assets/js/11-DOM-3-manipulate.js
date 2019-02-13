var element = document.getElementById("highlight");

element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.backgroundColor = "#Err";
element.style.margintop = "10px";

var ele = document.querySelector("h1");
ele.classList.add("some-class");

var elem = document.getElementsByClassName("special")[0];

elem.classList.add("another-class");

var pEle = document.querySelector(".test");
pEle.textContent = "This is a really <strong>awesome<strong> paragraph";

pEle.innerHTML = "This is a really <strong>awesome<strong> paragraph";

document.getElementsByTagName("h1")[1].textContent = "The End!";
document.getElementsByTagName("h1")[1].innetHTML = "The <i>End!</i>";

var link = document.querySelector("a");
link.getAttribute("href")
link.setAttribute("href", "https://www.youtube.com");

document.getElementsByTagName("img")[0]