const sections = [...document.querySelectorAll('section')]

const toggleOpen = (key) => {
  sections.slice(0, key).forEach(s => s.classList.add("closed"))
  sections[key].classList.remove("closed")
  sections.slice(key + 1, sections.length).forEach(s => s.classList.add("closed"))
}

window.addEventListener('load', () => sections.forEach((s, i) => s.firstElementChild.addEventListener('click', _e => toggleOpen(i))))