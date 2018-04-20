// Define Variables
// ==========================================================================
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {  

        // Determine win or loss.
        if (userGuess === computerGuess) {
            console.log("**YOU WIN!**");
            wins++;
            guessesLeft = 9  
        }
        
        if (userGuess != computerGuess && window.event.keyCode != 116) { // Catching F5 refresh from triggering a user guess Loss
            // console.log("**NO WIN**");
            guessesLeft--;      
            guessesSoFar++;
        }
        
        if(userGuess != computerGuess && guessesSoFar === 9) {
            console.log("**LOSS**");
            losses++;
            guessesLeft = 9;
            guessesSoFar = [];
        }
    
        // Creating a variable to hold HTML to keep track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<h1>The Physic Game</h1>" + 
            "<h3>Guess what letter I'm thinking of!</h3>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guesses so far: " + guessesSoFar + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

    }
}