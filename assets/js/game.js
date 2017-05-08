console.log("we're in");

// add examples to each later
var wordArray = [
  { word: "javascript",
    category: "js",
    hint: "Manipulates the DOM, not your friends." },
  { word: "hypertext markdown language",
    category: "html",
    hint: "Puts the structure in \"really-good-bone-structure.\"" },
  { word: "cascading style sheet",
    category: "js",
    hint: "lay em on top in the right order" },
  { word: "conditional",
    category: "html",
    hint: "if it's not this, then it's that" }];

var userGuess;
var currentWord;
var currentHint;
var correct;

// clear contents of an html element
function clearIt (element) {
  document.querySelector(element).innerHTML = "";
}

function newGame () {
  var randNum = Math.floor(Math.random() * wordArray.length);
  var newWord = wordArray[randNum].word;
  var newHint = wordArray[randNum].hint;
  // clear current word
  clearIt("#theWord");
  // make new spaces
  document.querySelector("#theWord").innerHTML = " _ ".repeat(newWord.length);
  // push values global
  currentWord = newWord;
  currentHint = newHint;
}

// get keypress value and store it in a variable
document.onkeyup = function (event) {
  userGuess = event.key.toLowerCase();
  console.log(userGuess);
  makeGuess(userGuess);
}

// var computerGuess = options[Math.floor(Math.random() * options.length)];
function makeGuess (char) {
  var rightGuessList = currentWord.split('');
  // console.log(rightGuessList);
  // console.log(userGuess;
  correct = rightGuessList;

  // loop throught rightGuessList or forEach it
    // compare the userGuess to the value at each index
    // if the values match, update the dom

  // if (userGuess.toString()) {
  //
  // }
}
// press any key to get started on the page

// keep track of wins (times user guessed correctly)

// keep track of incorrect guesses

// the correct letters populate with each guess

// show # of guesses remaining

// play another word when complete


// have a word to start with
newGame();
