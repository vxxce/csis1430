const guessInput = document.querySelector('#guess')
const submit = document.querySelector('#submit')
const message = document.querySelector('h1')
const again = document.querySelector('#again')


let answer = Math.ceil(Math.random() * 99)
let guess = guessInput.value
let attempts = 0

const newGame = () => {

  // ::::::::: ELEMENT CONSTANTS :::::::::::

}
// :::::::::: GAME FUNCTIONS :::::::::::::

// Checks if a guess is higher, equivalent to, or lower than answer 
const checkGuess = (guess, answer) => (guess - answer) / Math.abs(guess - answer) ? (guess - answer) / Math.abs(guess - answer) : 0

// const loadImage = async (src) => {

// }

// Update DOM to reflect guess
const updateView = (guess, difference) => {
  guessInput.focus()
  switch(difference){
    case -1:
      message.textContent = `${guess.toString()} is too low, guess again!`
      break
    case 0:
      message.textContent = "Nice."
      again.classList.toggle('hidden')
      break
    case 1:
      message.textContent = `${guess.toString()} is too high, guess again!`
      break
    default:
      break
    }
}

const checkForSubmit = event => {
      // Ignore key input beyond two characters, unless key is Enter, Backspace, or Tab
      if (event.keyCode == 13) {
        event.returnValue = true
        event.preventDefault()
        newGuess()
      } else if (event.target.value.length >= 2 && event.keyCode != 8 && event.keyCode != 9) {
        event.returnValue = false
    } else {
      event.returnValue = true
    }
}

const newGuess = () => {
  let guess = Number(guessInput.value)
  let diff = checkGuess(guess, answer)
  updateView(guess, diff)
  attempts += 1
}

// ::::::::: EVENT LISTENERS ::::::::::::::

// Clear element when focus re-applied after user guess
guessInput.addEventListener('focus', () => guessInput.value = "")

// Prevent form submission on "Enter" keypress and instead updateView()
guessInput.addEventListener('keydown', e => checkForSubmit(e))

// Imitate submit event (not actually a GET or POST)
submit.addEventListener('click', () => {
  newGuess()
  guessInput.focus()
})

window.onload = () => newGame()