//GLOBAL VARIABLES

var name = prompt("What is your name?");
console.log("Hello " + name);

var wordOptions = [
    "vanilla", "chocolate", "rockyroad", "mint", "strawberry", "butterpecan", "cookiedough"
];
var selectedWord ="";
var lettersinWord =[];
var numBlank = 0;
var blankAndSuccesses = [];
var wrongletters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;



//FUNCTIONS

function startGame () {
    selectedWord = 
    wordOptions[Math.floor(Math.random()* 
        wordOptions.length)];
    console.log(selectedWord);
    lettersinWord = 
    selectedWord.split("");
    console.log(lettersinWord);
    
    numBlank = lettersinWord.length;
    console.log(numBlank);
    
    for (var i=0; i < numBlank; i++) {
        blankAndSuccesses.push("_");
    }
    console.log(blankAndSuccesses);

function checkLetters(letter) {


    var isLetterInWord = false;

    for (var i=0; i<numBlank; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;

        }
    }
}   

if(isLetterInWord) {
    for(var i=0; i<numBlank; i++) {
    if(selectedWord[i] == letter) {
        blankAndSuccesses[i] == lettersinWord;
    }
}


else {
    wrongletters.push(letter);
    numGuesses
}
}


guessesLeft = 10;
wrongletters = [];
blankAndSuccesses = [];

       
 document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join("");
 document.getElementById("numGuesses").innerHTML = guessesLeft;
 document.getElementById("winCount").innerHTML = winCount;
 document.getElementById("lossCount").innerHTML = lossCount;

// MAIN PROCESS

startGame();

document.onkeypress = function(event) {
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed);
}

document.onclick = function(event) {
var sample = document.getElementById("music");
sample.play();
}