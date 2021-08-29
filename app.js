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
        // disabling input 
        guessInput.disabled = true 
        // adding green border when guess is correct
        guessInput.style.borderColor = 'green'
        // setting message to tell user they won
        setMessage(`${winningNum} is correct!, YOU WIN!`, 'green')
    } else {

    }
})

function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg
}