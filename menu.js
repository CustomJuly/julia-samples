const handle = document.getElementById('menu-handle')
const menu = document.getElementById('mobile-menu') // <nav>
const anchors = document.querySelectorAll('.header-menu-right a[href*="#"], .header-mobile-menu a[href*="#"]')

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


for (let anchor of anchors) {
  function onLinkClick(event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    const target = document.getElementById(blockID)

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    })

    /*
    Не сильно оптимизировано, потому что мобильная менюшка будет "закрываться"
    даже если мы используем только десктопную менюшку
    * */
    menu.classList.remove('opened') // закрываем менюшку
    handle.classList.remove('opened') // из крестика в гамбургер
  }

  anchor.addEventListener('click', onLinkClick)
}
