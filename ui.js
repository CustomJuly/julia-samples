const yearContainer = document.getElementById('year')
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
yearContainer.innerText = currentYear.toString()

const counterCompanies = document.getElementById('counter-companies')

let currentCompanies = 0
const companiesMax = 1783

const animationDurationMs = 1000
const updateTimeMs = 10

const step = Math.round(companiesMax / (animationDurationMs / updateTimeMs)) || 1

function startCompaniesCounter() {
  if (currentCompanies < companiesMax) {
    if (currentCompanies + step >= companiesMax) {
      currentCompanies = companiesMax

      // останавливаем временной цикл "setInterval"
      clearInterval(intervalId)
    } else {
      currentCompanies = currentCompanies + step
    }
    counterCompanies.innerText = currentCompanies.toString()
  }
}

// запускаем цикл setInterval – он запускает функцию startCompaniesCounter через каждый updateTimeMs миллисекунд
const intervalId = setInterval(startCompaniesCounter, updateTimeMs)
