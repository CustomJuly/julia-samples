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

  xhr.open('POST', 'https://5b413d3bc91d2c115696b0f4276c58e5.m.pipedream.net', false)
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

  const body = {
    name: name,
    email: email,
    phone: phone,
    message: message
  }

  xhr.send(JSON.stringify(body))
  if (xhr.status === 200) {
    console.log('результат', xhr.response)
  } else {
    console.log('ошибочка', xhr.status)
  }
})

arrow.addEventListener('click', function () {
  nameInput.focus()
})

// GET POST PUT/PATCH DELETE
// 200+ // всё ок
// 300+ // редирект
// 400+ // ошибки со стороны клиента
// 500+ // ошибки сервера
