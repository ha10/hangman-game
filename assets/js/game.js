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
  }
  // insert into document
  if (letterInWord === true) {
    for (var i = 0; i < correctGuesses.length; i++) {
      if (char === correctGuesses[i]) {
        if (userGuesses.indexOf(char) === -1) {
          userGuesses.push(char);
        }
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

  if (userGuesses.length === correctGuesses.length){
    alert("winner!");
    userScore++;
    newGame();
    userGuesses = [];
    wrongGuesses = [];
    wrongGuessesCount = 0;
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
