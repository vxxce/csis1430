const h1 = document.querySelector('h1')
const body = document.querySelector('body')

const randomColor = () => {
  return [...Array(3).keys()]
                 .map(_v => Math.round(Math.random() * 255))
                 .map(n => n.toString(16))
                 .map(c => c.padEnd(2, '0'))
                 .join('')
}

const complement = hexColor => {
  return [hexColor.substr(0, 2), hexColor.substr(2, 2), hexColor.substr(4,2)]
            .map(s => parseInt(s, 16))
            .map(n => 255 - n)
            .map(n => n.toString(16))
            .map(c => c.padEnd(2, '0'))
            .join('')
}

const wheel = setInterval(() => {
  let random = randomColor()
  h1.style.color = "#" + random
  body.style.backgroundColor = "#" + complement(random)
}, 1000)