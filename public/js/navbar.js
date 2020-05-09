const showPane = document.querySelector('#showPane')
const hidePane = document.querySelector('#hidePane')

showPane.addEventListener('click', () => {
  document.querySelector('#navPane').style.transform = "translate3d(calc(0vw + 1rem), 0, 0)"
})

hidePane.addEventListener('click', () => {
  document.querySelector('#navPane').style.transform = "translate3d(calc(-100vw - 1rem), 0, 0)"
})
