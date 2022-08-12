const submenu = document.querySelector('#submenu')
const menu = document.querySelector('#menu')
const submenuCollapse = document.querySelector('#submenu-collapse')
const menuCollapse = document.querySelector('#menu-collapse')

menu.addEventListener('click', () => {
  menuCollapse.classList.toggle('Collapse')
})

submenu.addEventListener('click', () => {
  submenuCollapse.classList.toggle('Collapse-submenu')
})
