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
    if(guess === NaN || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`)
    }
})

function setMessage(msg){
    message.textContent = msg
}