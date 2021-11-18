const roll = document.getElementById('roll')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

function isFirstSlide() {
  return roll.scrollLeft === 0
}

function isLastSlide() {
  const scrollWidth = roll.scrollWidth
  const lastSlidePosition = scrollWidth - roll.offsetWidth
  const currentX = roll.scrollLeft
  return currentX === lastSlidePosition
}

function goPrevious() {
  if (isFirstSlide()) {
    const scrollWidth = roll.scrollWidth
    const lastSlidePosition = scrollWidth - roll.offsetWidth
    roll.scrollTo({ left: lastSlidePosition, behavior: 'smooth' })
  } else {
    const currentX = roll.scrollLeft
    const newX = currentX - roll.offsetWidth
    roll.scrollTo({ left: newX, behavior: 'smooth' })
  }
}

function goNext() {
  if (isLastSlide()) {
    roll.scrollTo({ left: 0, behavior: 'smooth' })
  } else {
    const currentX = roll.scrollLeft
    const newX = currentX + roll.offsetWidth
    roll.scrollTo({ left: newX, behavior: 'smooth' })
  }
}

leftBtn.addEventListener('click', goPrevious)
rightBtn.addEventListener('click', goNext)
