let min = 1
let max = 10
let winningNum = 2
let guessesLeft = 3

// UI elements 
const game = document.querySelector('#game')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessButton = document.querySelector('#guess-button')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message') 

// assigning UI min and max
// what is line 16 and 17 doing?
minNum.textContent = min 
maxNum.textContent = max

// Play Again eventlistener, click won't work since it reacts to the whole wrapper and click will bypass the guesses and reload the page
game.addEventListener('mousedown', function(event){
    if(event.target.className === 'play-again'){
        window.location.reload()
    }
})

// listening for guess input 
guessButton.addEventListener('click', function(){
    // the comparison needs to be a Number, not String, so it needs to be parsed as an integer
    let guess = parseInt(guessInput.value)

    // validating the input to meet parameters
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    // checking if value is 1
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        // wrong number, reducing amount of guesses until none are left
        guessesLeft -= 1
        if(guessesLeft === 0){
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
        } else {
        // guess wrong, game continues
        // adding red border when guess is incorrect
        guessInput.style.borderColor = 'red'
        // adding red font when guess is incorrect 
        message.style.color = 'red'
        // remove user input from previous guess
        guessInput.value = ''
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }
    }
})

function gameOver(won, msg){
    let color 
    // if condition is won then change the color to green, otherwise change it to red
    won === true ? color = 'green' : color = 'red'
    guessInput.disabled = true 
    // adding green border when guess is correct
    guessInput.style.borderColor = color
    // adding green font when guess is correct
    message.style.color = color 
    // setting message to tell user they won
    setMessage(msg)
    // Play again
    guessButton.value = 'Play Again?'
    // adding class to button to add event listener to this new version of this same button
    // += is appending a class with a name to the button
    guessButton.className += 'play-again'
}

// settting a message to user based on conditions met
function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg
}

// because Play Again? class has been created after the page loads, event delegation is needed to add an event listener to the parent of that button, then search for the target
