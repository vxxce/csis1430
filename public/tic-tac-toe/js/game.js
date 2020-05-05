const board = document.querySelector('#board')
const again = document.querySelector('#again')
const player1 = document.querySelector('#player-one')
const player2 = document.querySelector('#player-two')
const name = document.querySelector('h2')

let turn = 0
let moves = 0
let cells = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const checkWin = (col, row) => {
  if ((col == 2 || col == 0) && (row == 2 || row == 0)) {
    if (cells[0][0] == cells[1][1]  && cells[0][0] == cells[2][2]) return true
    else if (cells[2][0] == cells[1][1] == cells[0][0] == cells[0][2]) return true
  }
  if (cells[row].every(v => v == cells[row][col])) return true
  if (cells.every(r => r[col] == cells[row][col])) return true
  return false
}

const reset = () =>  {
  turn = 0
  moves = 0
  cells.length = 0;
  cells = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  for (el of board.children) {
    el.classList.remove("disabled")
    el.textContent = ""
  }
  name.textContent = player2.value
  again.style.display = "none"
}

const newGame = (lastMove, won) => {
  if (won) name.textContent = `${lastMove} wins!`
  else name.textContent = "Nobody wins, but nobody loses either!"
  again.style.display = "inline-block";
}

player1.addEventListener('change', () => {
  player1.style.display = "none"
  player2.style.display = "block"
  player2.focus()
})

player2.addEventListener('change', () => {
  player2.style.display = "none"
  name.style.display = "block"
  name.textContent = `${player1.value}'s up!`
  for (el of board.children) {
    el.classList.remove("disabled")
  }
})

again.addEventListener('click', ()  => reset())

board.addEventListener('click', e => {
  if (e.target.tagName != "DIV" || e.target.classList.contains("disabled")) return
  else {
      e.target.classList.add("disabled")
      let col = Number(e.target.id) % 10
      let row = Number(Math.floor(e.target.id / 10))
      cells[row][col] = turn + 1
      e.target.textContent = "XO".charAt(turn)
      turn += (turn) ? -1 : 1
      if (checkWin(col, row)) {
        newGame(name.textContent, true)
      } else if (moves == 9) {
        newGame(name.textContent, false) 
      } else {
        name.textContent = (name.textContent == player2.value) ? player1.value : player2.value
      }
  }
})

window.onload = () => {
  reset()
  for (el of board.children) {
    el.classList.add("disabled")
  }
}