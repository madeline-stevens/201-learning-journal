//sets the computer choices
var computerChoices = ["r", "p", "s"];

//declares the tallies to 0
var wins = 0;
var losses = 0;
var ties = 0;

//when the user presses the key it records the keypress and then sets it to user guess
document.onKeyUp = function(event) {
  var userGuesses = string.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuesses);
};
