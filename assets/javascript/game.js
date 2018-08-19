//generate a random letter
//Wins: (# of times the user has guessed the letter correctly)
//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//Guesses Left: (# of guesses left. This will update)
//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

//PseudoCode//
//Generate a random Letter
//Record the turn number the player is on. Starts at 9
//Provide the player with a way to guess what letter PC is thinking
//Once a guess has been submitted, record it somewhere so the user can see their previous guesses
//Next, check if player made the correct choice
//If correct - display congratulations message, add to the wins score   
//| If wrong - subtract to guesses left 
//| if wrong and guesses left at 0, display control allowing player to restart, add to losses score


//PC letter choices//
var pcChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables//

let wins = 0;
let losses = 0
let guessesLeft = 9;
let yourGuesses = [];
let guesses = 9



var letterToGuess = null;
//random letter//
var pcGuess = pcChoices[Math.floor(Math.random() * pcChoices.length)];

//Functions//

//Record turns. Start with 9//
function updateGuessesLeft() {
    document.querySelector('#guessesLeft').innerHTML="Guesses left: " + guessesLeft;
};
//Provide player to guess//
function updateGuessedLetter() {
    this.letterToGuess = this.pcChoices[Math.floor(Math.random() * this.pcChoices.length)];
};

//Previous guesses//
function updateYourGuesses() {
    document.querySelector('#let').innerHTML = yourGuesses.join(', ');
};

//reset//

var reset = function () {
    guessesLeft = 9;
    yourGuesses = []
    guesses = 9;

    updateGuessedLetter();
    updateGuessesLeft();
    updateYourGuesses();
}

updateGuessedLetter();
updateGuessesLeft();


//Keys and Events//

document.onkeyup = function (event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = pcChoices.includes(playerGuess);

    if (check === false) {
        alert("That key is not in the alphabet");
        return false;
    }
    else if (check === true) {
        guessesLeft--;
        yourGuesses.push(playerGuess);
        updateGuessesLeft();
        updateYourGuesses();

        if (guessesLeft > 0) {
            if (playerGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Total Wins: " + wins;
                playerGuess = playerGuess.toUpperCase();
                alert("You have guessed: " + playerGuess + ". Congratulations! Do you happen to know this week's Lottery numbers?");
                reset();
            }
        }
        else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = " Total Losses: " + losses;
            alert("Nope. You are not a good Psychic. Try again");
            reset();
        }
        return false;
    }
    else {
        alert("Ahh, an error")
    }

};
