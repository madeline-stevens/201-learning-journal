//this is a seperate Q (the JS Q) from the trilogy video.

//sets the computer choices
var computerChoices = ["r", "p", "s"];

//Declares the tallies to 0
var wins = 0;
var losses = 0;
var ties = 0;

//When the user presses the key it records the keypress and then sets it to user guess
document.onKeyUp = function(event) {
  var userGuesses = string.fromCharCode(event.keycode).toLowerCase();
  console.log(userGuesses);
};

//this sets the computer guess equal to the random
var computerGuess = computerChoices[Math.floor(Math.random())];

//making sure the user chooses r, p or s.
if (userGuess == "r" || userGuess == "p" || userGuess == "s");

//test to determine if the computer or the user... won?
//compare user tallies to computer tallies?
