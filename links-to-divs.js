const anchors = document.querySelectorAll('.header-menu-right a[href*="#"]')

for (let anchor of anchors) {
  function onLinkClick(event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    const target = document.getElementById(blockID)

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    })
  }

  anchor.addEventListener('click', onLinkClick)
}
