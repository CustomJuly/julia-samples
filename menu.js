const handle = document.getElementById('menu-handle')
const menu = document.getElementById('mobile-menu') // <nav>

handle.addEventListener('click', function () {
  let opened = false

  for (let className of menu.classList) {
    if (className === 'opened') {
      opened = true
      break // тормозит цикл
    }
  }

  if (opened) {
    menu.classList.remove('opened') // закрываем менюшку
    handle.classList.remove('opened') // из крестика в гамбургер
  } else {
    menu.classList.add('opened') // открываем менюшку
    handle.classList.add('opened') // из гамбургера в крестик
  }
})
