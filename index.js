//generates a random number between 1 and 6
let randomNumber1 = parseInt(Math.random() * 6) + 1;
let imageSource1 = "./images/dice" + randomNumber1 + ".png";
//generates a random number between 1 and 6
let randomNumber2 = parseInt(Math.random() * 6) + 1;
let imageSource2 = "./images/dice" + randomNumber2 + ".png";

//sets the image source
document.querySelector(".img1").setAttribute("src", imageSource1);

document.querySelector(".img2").setAttribute("src",imageSource2);

//check if we have a winner
let result = randomNumber1 > randomNumber2 ? "Player 1 Wins!" : randomNumber2 > randomNumber1 ? "Player 2 Wins!" : "Draw!";

//declare the result
document.querySelector(".container h1").textContent = result;





