// ::::::::: ELEMENT CONSTANTS :::::::::::

const guessInput = document.querySelector('#guess')
const submit = document.querySelector('#submit')
const message = document.querySelector('h1')


// :::::::::: GAME FUNCTIONS :::::::::::::

// Init random answer
let answer = Math.ceil(Math.random() * 99)

// Checks if a guess is higher, equivalent to, or lower than answer 
const checkGuess = guess => (guess - answer) / Math.abs(guess - answer) ? (guess - answer) / Math.abs(guess - answer) : 0

// Update DOM with feedback about guess
const showFeedback = () => {
  let guess = Number(guessInput.value)
  guessInput.value = ""
  switch(checkGuess(guess)){
    case -1:
      message.textContent = "Too low, guess again!"
      break
    case 0:
      message.textContent = "Nice."
      message.nextElementSibling.classList.toggle('hidden')
      break
    case 1:
      message.textContent = "Too high, guess again!"
      break
    default:
      break
    }
}


// ::::::::: EVENT LISTENERS ::::::::::::::

// Clear element when focus re-applied after user guess
guessInput.addEventListener('focus', e => e.target.value = "")

// Prevent form submission on "Enter" keypress and instead showFeedback()
guessInput.addEventListener('keydown', e => {
  // Ignore key input beyond two characters, unless key is Enter, Backspace, or Tab
  if (e.keyCode == 13) {
    e.returnValue = true
    e.preventDefault()
    showFeedback()
  } else if (e.target.textLength > 1 && e.keyCode != 8 && e.keyCode != 9) {
    e.returnValue = false
  } else {
    e.returnValue = true
  }
})

// Imitate submit event (not actually a GET or POST)
submit.addEventListener('click', () => {
  showFeedback()
  guessInput.focus()
})