// alert("working!");

// -------------------- first player ------------------------------------
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
//     console.log(randomNumber1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); // change the image to the random  dice image

// ------------------- Second Player -------------------------------------
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Change the Heading to show the Player who wins

// If player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//  if player 2 wins
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
	document.querySelector("h1").innerHTML = "Draw! 🎲";
}
