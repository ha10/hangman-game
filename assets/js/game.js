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
    category: "html",
    hint: "if it's not this, then it's that" }];

var userGuess;
var currentWord;
var currentHint;
var correctGuesses;
var wrongGuesses = [];
var wrongGuessesCount = 0;
var correctGuesses = [];
var userScore = 0;
var userGuesses = [];
var guessesLeft = 8;

// clear contents of an html element
function clearIt (element) {
  document.querySelector(element).innerHTML = "";
}

// create new game
function newGame () {
  var randNum = Math.floor(Math.random() * wordArray.length);
  var newWord = wordArray[randNum].word;
  var newHint = wordArray[randNum].hint;
  // clear current word
  clearIt("#current-word");
  // push values global
  currentWord = newWord;
  currentHint = newHint;
  correctGuesses = currentWord.split('');
  document.getElementById("guesses-left").innerHTML = guessesLeft;

  // try to foreach this
  for (var i = 0; i < correctGuesses.length; i++) {
    document.querySelector("#current-word").innerHTML +=("<span class=\"" + correctGuesses[i] + "\"> _ </span>");
    // "<span id="correctGuesses[i]"> _ </span>"
    // <span id="correctGuesses[i]"> _ </span>
    // " _ ".repeat(newWord.length);
  }
  document.querySelector("#current-hint").innerHTML = newHint;
}

// get keypress value and store it in a variable
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    makeGuess(userGuess);
  } else if (event.keyCode === 32) {
    // figure out the space here
  //   for (var i = 0; i < currentWord.length; i++) {
  //     if (currentWord[i] === " ") {
  //       document.getElementsByClassName(" ").innerHTML = "test";
  //   }
  // }

}
}

// var computerGuess = options[Math.floor(Math.random() * options.length)];
function makeGuess (char) {
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
      wrongGuessesCount++;
      wrongGuesses.push(char);
      document.getElementById('wrong-guesses').innerHTML += char + " ";
      guessesLeft--;
      document.getElementById('guesses-left').innerHTML = guessesLeft;
      if (wrongGuessesCount > 8) {
        alert("better luck next time!");
        userGuesses = [];
        wrongGuesses = [];
        wrongGuessesCount = 0;
        guessesLeft = 8;
        document.getElementById('wrong-guesses').innerHTML = " ";
        document.getElementById('guesses-left').innerHTML = 8;
        newGame();
      }
  }
  // insert into document
  if (letterInWord === true) {
    userGuesses.push(char);
    for (var i = 0; i < correctGuesses.length; i++) {
      if (char === correctGuesses[i]) {
        // if (userGuesses.indexOf(char) === -1) {
        //   userGuesses.push(char);
        // }
        // for (var z = 0; z < userGuesses.length; z++) {
        //   if (char !== userGuesses[z]) {
        //     userGuesses.push(char);
        //   }
        // }
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
  if (userGuesses.length === correctGuesses.length){
    // debugger;
    userScore++;
    userGuesses = [];
    wrongGuesses = [];
    wrongGuessesCount = 0;
    guessesLeft = 8;
    document.getElementById('user-wins').innerHTML = userScore;
    document.getElementById('wrong-guesses').innerHTML = " ";
    document.getElementById('guesses-left').innerHTML = "8";
    alert("winner! the word was " + currentWord + ".");
    setTimeout(newGame, 500);
  }
}
// press any key to get started on the page

// keep track of wins (times user guessed correctly)

// keep track of incorrect guesses

// the correct letters populate with each guess

// show # of guesses remaining

// play another word when complete


// have a word to start with
newGame();
