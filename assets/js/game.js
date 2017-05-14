console.log("we're in");

// add examples to each later
var wordArray = [
  { word: "javascript",
    category: "js",
    hint: "Manipulates the DOM, not your friends." },
  { word: "html",
    category: "HTML",
    hint: "Puts the structure in \"really-good-bone-structure.\"" },
  { word: "css",
    category: "CSS",
    hint: "lay these sheets on top of each other" },
  { word: "pseudocode",
    category: "js",
    hint: "the type of code that you write to plan to write code" },
  { word: "variable",
    category: "CSS",
    hint: "this stores things" },
  { word: "loop",
    category: "CSS",
    hint: "iterates through a list" },
  { word: "callback",
    category: "js",
    hint: "this will call a function, maybe" },
  { word: "comment",
    category: "js",
    hint: "these are notes for yourself or those that come after you" },
  { word: "git",
    category: "terminal",
    hint: "local version control" },
  { word: "github",
    category: "",
    hint: "collaborative version control" },
  { word: "conditional",
    category: "js",
    hint: "if it's not this, then it's that" },
  { word: "parameter",
    category: "js",
    hint: "functions are passed these"},
  { word: "boolean",
    category: "js",
    hint: "a strange way to find a true or false value"},
  { word: "object",
    category: "js",
    hint: "a collection of properties consisting of a key and a value"},
  { word: "array",
    category: "js",
    hint: "a list of things"}];

// the showmakers
var userGuess; // the key event
var currentWord; // current word from wordArray
var currentHint; // current hint from wordArray
var wrongGuesses = []; // the user's incorrect guesses
var wrongGuessesCount = 0; // number of incorrect guesses so far
var correctGuesses = []; // array of right guesses
var correctGuessCount = 0; // correct number of guesses
var userScore = 0; // default user score
var userGuesses = []; // empty array of guesses to be populated
var guessesLeft = 8; // number of guesses user has to start
var randNum; // the index of the current word to splice out

// clear contents of an html element
function clearIt (element) {
  document.querySelector(element).innerHTML = "";
}

// create new game
function newGame () {
  randNum = Math.floor(Math.random() * wordArray.length);
  var newWord = wordArray[randNum].word;
  var newHint = wordArray[randNum].hint;
  wordArray.splice(randNum, 1); // no repeat words
  clearIt("#current-word"); // clear current word
  // push values global
  currentWord = newWord;
  currentHint = newHint;
  correctGuesses = currentWord.split('');
  document.getElementById("guesses-left").innerHTML = guessesLeft;

  // create blanks with matching classes
  correctGuesses.forEach(function (value, i){
    document.querySelector("#current-word").innerHTML +=("<span class=\"" + value + "\"> _ </span>");
  });

  document.querySelector("#current-hint").innerHTML = newHint;
  if (wordArray.length === 0) {
    alert("congrats! that's all the words we have for you right now. refresh to play again!")
  }
}

// get keypress value and store it in a variable
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    makeGuess(userGuess);
  } else if (event.keyCode === 32) {
  }
}

// var computerGuess = options[Math.floor(Math.random() * options.length)];
function makeGuess (char) {
  if (userGuesses.indexOf(char) !== -1) {
    return;
  }
  var letterInWord = false;
  // Check if a letter exists inside the array

  for (var i = 0; i < correctGuesses.length; i++) {
    if (char.toLowerCase() === correctGuesses[i].toLowerCase()) {
      letterInWord = true;
      console.log(letterInWord);
      break;
    } else if (char !== correctGuesses[i]) {
      letterInWord = false;
      console.log(letterInWord);
    }
  }

  // increase wrongGuessesCount if letter is not in word
  if (letterInWord === false) {
      if (wrongGuesses.indexOf(char) === -1) {
        wrongGuesses.push(char);
        wrongGuessesCount++;
        document.getElementById('wrong-guesses').innerHTML += char + " ";
        guessesLeft--;
        document.getElementById('guesses-left').innerHTML = guessesLeft;
      }

      if (wrongGuessesCount >= 8) {
        alert("better luck next time!");
        userGuesses = [];
        wrongGuesses = [];
        wrongGuessesCount = 0;
        correctGuessCount = 0;
        guessesLeft = 8;
        document.getElementById('wrong-guesses').innerHTML = " ";
        document.getElementById('guesses-left').innerHTML = 8;
        newGame();
      }
  }

  // insert into document if correct
  if (letterInWord === true) {
    userGuesses.push(char);
    for (var i = 0; i < correctGuesses.length; i++) {

      if (char === correctGuesses[i]) {
        correctGuessCount++;
        var matches = document.querySelectorAll("." + char);
        for (var y = 0; y < matches.length; y++){
          matches[y].innerHTML = char;
          console.log(matches);
        }
      }
    }
  }
  checkScore();
}

//check the score
function checkScore () {
  if (correctGuessCount === correctGuesses.length){
    userScore++;
    userGuesses = [];
    wrongGuesses = [];
    wrongGuessesCount = 0;
    guessesLeft = 8;
    correctGuessCount = 0;
    document.getElementById('user-wins').innerHTML = userScore;
    document.getElementById('wrong-guesses').innerHTML = " ";
    document.getElementById('guesses-left').innerHTML = "8";
    alert("winner! the word was " + currentWord + ".");
    setTimeout(newGame, 500);
  }
}

newGame();
