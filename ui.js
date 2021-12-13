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

const counterCompanies = document.getElementById('counter-companies')
const counterSuccess = document.getElementById('counter-success')
const counterPercentage = document.getElementById('counter-percentage')

// успешной работы = текущий (2021) – год открытия (2001)
startAnimation(counterCompanies, 500, 10)
startAnimation(counterSuccess, currentYear - 2001, 50)
startAnimation(counterPercentage, 30, 30)
