const submitBtn = document.getElementById('submit-btn')

const nameInput = document.getElementById('first-name')
const emailInput = document.getElementById('user-email')
const phoneInput = document.getElementById('user-phone')
const messageInput = document.getElementById('message')
const arrow = document.getElementById('arrow-left')

submitBtn.addEventListener('click', function () {
  const name = nameInput.value
  const email = emailInput.value
  const phone = phoneInput.value
  const message = messageInput.value

  const xhr = new XMLHttpRequest()

  xhr.open('POST', 'https://41edfbd036a94ccf0bdb5bd838877948.m.pipedream.net', false)
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

  const body = {
    name: name,
    email: email,
    phone: phone,
    message: message
  }

  const jsonStr = JSON.stringify(body)

  submitBtn.setAttribute('disabled', 'disabled')
  xhr.send(jsonStr)
  if (xhr.status === 200) {
    submitBtn.innerText = 'Отправлено'
  } else {
    submitBtn.innerText = 'Ошибка'
  }
})

arrow.addEventListener('click', function () {
  nameInput.focus()
})

