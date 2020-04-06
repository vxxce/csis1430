const name = prompt("What is your name?")
const age = prompt("What is your age?")

Number.parseInt(age) >= 50
  ? alert(`Hi ${name}! You are ${age}. That's pretty old.`)
  : alert(`Hi ${name}! You are ${age}. Still young!`)

document.querySelector('h1').textContent = `Hello ${name}!`