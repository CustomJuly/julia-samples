const yearContainer = document.getElementById('year')
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
yearContainer.innerText = currentYear.toString()

function startAnimation(insertInto, maxValue, updateTimeMs) {
  // const insertInto = принимаю значение из параметра №1
  let currentCompanies = 0
  const animationDurationMs = 1000

  const rounded = Math.round(maxValue / (animationDurationMs / updateTimeMs))
  const step = rounded || 1

  function startCompaniesCounter() {
    if (currentCompanies >= maxValue) {
      return
    }

    if (currentCompanies + step >= maxValue) {
      currentCompanies = maxValue

      // останавливаем временной цикл "setInterval"
      clearInterval(intervalId)
    } else {
      currentCompanies = currentCompanies + step
    }
    insertInto.innerText = currentCompanies.toString()
  }

// запускаем цикл setInterval – он запускает функцию startCompaniesCounter через каждый updateTimeMs миллисекунд
  const intervalId = setInterval(startCompaniesCounter, updateTimeMs)
}


let observables = {
  'counter-companies': {
    target: document.getElementById('counter-companies'),
    wasRun: false,
    maxValue: 1783,
    updateTimeMs: 10
  },
  'counter-success': {
    target: document.getElementById('counter-success'),
    wasRun: false,
    maxValue: currentYear - 2001,
    updateTimeMs: 50
  },
  'counter-percentage': {
    target: document.getElementById('counter-percentage'),
    wasRun: false,
    maxValue: 30,
    updateTimeMs: 30
  }
}


function onIntersect(entries) {
  for (let entry of entries) {
    const id = entry.target.id
    if (entry.intersectionRatio === 1 && !observables[id].wasRun) {
      startAnimation(entry.target, observables[id].maxValue, observables[id].updateTimeMs)
      observables[id].wasRun = true
    }
    if (observables[id].wasRun) {
      observer.unobserve(entry.target)
      // observer.unobserve(observables[id].target)
    }
    // сборщик мусора тут
  }
}

const observer = new IntersectionObserver(onIntersect, {
  root: null,
  threshold: 1
})

observer.observe(observables['counter-companies'].target)
observer.observe(observables['counter-success'].target)
observer.observe(observables['counter-percentage'].target)
