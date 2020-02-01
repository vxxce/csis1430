const moduleOne = document.getElementById('moduleOne')
moduleOne.style.width = '85vw'
moduleOne.style.height = '65vh'
moduleOne.addEventListener('mouseover', e => {
  moduleOne.style.backgroundColor = '#ffdddd'
  moduleOne.style.transitionDuration = '3s'
  moduleOne.style.transform = 'rotate(360deg)'
})
moduleOne.addEventListener('mouseout', e => {
  moduleOne.style.backgroundColor = '#fff'
  
})