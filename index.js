var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generates randome number 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //generates randome number 1 - 6

var diceName1 = "images/dice" + randomNumber1 + ".png"; //assigns filename to variable
var diceName2 = "images/dice" + randomNumber2 + ".png"; //assigns filename to variable

var image1 = document.querySelectorAll("img")[0]; //makes array of all img tags selected
image1.setAttribute("src", diceName1); //changes value of the src

document.querySelectorAll("img")[1].setAttribute("src", diceName2); // combines the previous 2 lines for dice 2

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!!!"; //changes h1 to say who wins
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!!!"; //changes h1 to say who wins
} else {
  document.querySelector("h1").innerHTML = "It's a draw!!!"; //changes h1 to say who wins
}
