// ::::::::: ELEMENT CONSTANTS :::::::::::

const guessInput = document.querySelector('#guess')
const submit = document.querySelector('#submit')
const message = document.querySelector('h1')
const again = document.querySelector('#again')
const image = document.querySelector('img')
const guesses = document.querySelector('#guesses')


// ::::::::::::::: INIT :::::::::::::::::::

let answer = 0
let attempts = 0
let guessesMade = []

// :::::::::: GAME FUNCTIONS :::::::::::::

// Checks if a guess is higher, equivalent to, or lower than answer 
const checkGuess = (guess, answer) => (guess - answer) / Math.abs(guess - answer) ? (guess - answer) / Math.abs(guess - answer) : 0

// Update view based on  guess

const updateView = (guess, difference) => {
  guesses.innerHTML =
    "<span>".concat(guessesMade
                      .filter(v => v != "")
                      .map(v => Number.isNaN(v) ? "?" : v)
                      .join(',</span><span>'))
    .concat("</span>")


  if (attempts == 8) {
    attempts = 0
    message.textContent = "You lose."
    again.classList.remove('hidden')
    image.src = "img/error.jpg"
    guessInput.disabled = true;
    return
  }

  switch(difference){
    case -1:
      message.textContent = `${guess.toString()} is too low, guess again!`
      image.src = "img/low.jpg"
      break
    case 0:
      message.textContent = `Nice! You took ${guessesMade.length.toString()} guesses.`
      again.classList.remove('hidden')
      image.src = "img/win.jpg"
      break
    case 1:
      message.textContent = `${guess.toString()} is too high, guess again!`
      image.src = "img/high.jpg"
      break
    case "new":
      guessesMade = []
      attempts = 0
      answer = Math.ceil(Math.random() * 99)
      console.log(
        `**********************\n** THE ANSWER IS ${answer.toString().padStart(2, "0")} **\n**********************`)
      again.classList.add('hidden')
      message.textContent = "Guess a number between 1 and 99!"
      image.src = "img/start.jpg"
      guesses.innerHTML = ""
      break
    default:
      message.textContent = "That is... not a number?"
      image.src = "img/error.jpg"
      break
    }
}

// Handler for guess input. Checks if enter key and prevents > 2 digits
const checkForSubmit = event => {
      if (event.keyCode == 13) {
        event.returnValue = true
        event.preventDefault()
        newGuess()
      // Allows third keystroke if it's to delete or tab focus
      } else if (event.target.value.length >= 2 && event.keyCode != 8 && event.keyCode != 9) {
        event.returnValue = false
    } else {
      event.returnValue = true
    }
}

// Submit guess
const newGuess = () => {
  let guess = Number(guessInput.value) || NaN
  let diff = Number(guess) ? checkGuess(guess, answer) : NaN
  guessesMade.push(guess)
  attempts++
  updateView(guess, diff)
  guessInput.value = ""
}

// ::::::::: EVENT LISTENERS ::::::::::::::
window.onload = () => updateView("", "new")

// Clear element when focus re-applied after user guess
guessInput.addEventListener('focus', () => guessInput.value = "")

// Prevent form submission on "Enter" keypress and instead updateView()
guessInput.addEventListener('keydown', e => checkForSubmit(e))

again.addEventListener('click', () => {
  guessInput.disabled = false
  updateView("", "new")
})
