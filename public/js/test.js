const test = document.getElementById('test')
test.style.width = '100vw'
test.style.height = '75vh'
test.addEventListener('mouseover', e => {
  test.style.backgroundColor = '#ffdddd'
})
test.addEventListener('mouseout', e => {
  test.style.backgroundColor = '#fff'
})