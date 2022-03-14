const roll = document.getElementById('roll')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

const carousel = document.getElementById('carousel')
// массив (а если точнее – List)
const slides = document.querySelectorAll('.carousel__slide')
const sticks = document.querySelectorAll('.carousel-timer__stick')

function isFirstSlide() {
  return roll.scrollLeft === 0
}

function isLastSlide() {
  const scrollWidth = roll.scrollWidth
  const lastSlidePosition = scrollWidth - roll.offsetWidth
  const currentX = roll.scrollLeft
  return Math.abs(currentX - lastSlidePosition) <= 5
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

function onSlidesObserve(entries) {
  for (let entry of entries) {
    const child = entry.target
    const parent = child.parentNode
    const children = parent.children
    const index = Array.prototype.indexOf.call(children, child)

    if (entry.intersectionRatio >= 0.5) {
      sticks[index].classList.add('active')
    } else {
      sticks[index].classList.remove('active')
    }
  }
}


const slidesObserver = new IntersectionObserver(onSlidesObserve, {
  root: carousel,
  threshold: 0.5
})

function observe(slide) {
  slidesObserver.observe(slide)
}

slides.forEach(observe)
