document.querySelector(".jumbotron").style.backgroundColor = "#6b757e";
document.querySelector(".jumbotron").style.color = "white";
document.querySelector(".jumbotron").style.textAlign="right";

document.querySelector("#learn-more").style.backgroundColor = "#27a844";
document.querySelector("#learn-more").style.borderColor = "#27a844";


var ul = document.querySelector(".list-group");
var itemOne = ul.children[0].classList.remove("active")

var itemFour = document.createElement("li");
itemFour.appendChild(document.createTextNode("Quarto Item"));
itemFour.classList.add("list-group-item");
itemFour.classList.add('active');
ul.appendChild(itemFour);

var itemFive = document.createElement("li");
itemFive.appendChild(document.createTextNode("Quinto Item"));
itemFive.classList.add("list-group-item");
ul.appendChild(itemFive);


var menu = document.querySelector(".btn-group-vertical");
menu.classList.remove("btn-group-vertical");

const cardOne = document.querySelector("#item1");
const cardTwo = document.querySelector("#item2");
const cardThree = document.querySelector("#item3");
const cardFour = document.querySelector("#item4");

function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}

insertBefore(cardFour,cardOne);
insertBefore(cardThree, cardTwo );

document.querySelector("#btn-cardOne").style.backgroundColor = "#27a844";
document.querySelector("#btn-cardOne").style.borderColor = "#27a844";
