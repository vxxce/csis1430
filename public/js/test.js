const test = document.getElementById('test')
test.style.width = '85vw'
test.style.height = '65vh'
test.addEventListener('mouseover', e => {
  test.style.backgroundColor = '#ffdddd'
})
test.addEventListener('mouseout', e => {
  test.style.backgroundColor = '#fff'
})