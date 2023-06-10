const menuBtn = document.getElementById('menu-open')
const menu = document.getElementById('menu')
const nav = document.getElementById('main-nav')
const navContainer = document.getElementsByClassName('container')[0]

menuBtn.addEventListener('click', menuChange)

function menuChange (isOpen = true) {
  if (menu.style.display == 'none' && isOpen) {
    menu.style.display = 'flex'
    nav.style.backgroundColor = 'transparent'
    navContainer.style.backgroundColor = 'transparent'
  }
  else {
    nav.style.backgroundColor = 'white'
    menu.style.display = 'none'
    navContainer.style.backgroundColor = 'white'
  }
}