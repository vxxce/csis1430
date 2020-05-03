const form = document.querySelector('form')
const numbers = document.querySelector('#nums')
const numLength = document.querySelector('#numLength')

const clearChildren = parent => [...parent.childNodes].forEach(n => parent.removeChild(n))
const makeRandomIntArray = length => [...Array(length)].map(_v => Math.ceil(Math.random() * 99))
const formatNums = nums => nums.map((n, i) => n.toString()
                                               .padStart(2, "0")
                                               .concat((i < nums.length - 1) && (i % 4 != 3) ? "-" : ""))
const displayNums = nums => nums.map(n => {
  numbers
    .appendChild(document.createElement('span'))
    .appendChild(document.createTextNode(n))
})
form.addEventListener('submit', e => {
  clearChildren(numbers)
  displayNums(formatNums(makeRandomIntArray(Number(e.target.firstElementChild.value))))
  e.preventDefault()
})