// console.log("I am connected!")

const menu = document.querySelector('.nav__links')
const items = document.querySelectorAll('.item')
const burger = document.querySelector('.nav__burger')
const close = document.querySelector('.closeIcon')
const open = document.querySelector('.menuIcon')

const toggleMenu = () => {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove('showMenu')
        close.style.display = "none"
        open.style.display = "block"
    } else {
        menu.classList.add("showMenu")
        close.style.display = "block"
        open.style.display = "none"
    }
}

burger.addEventListener("click", toggleMenu)

items.forEach(
    function (items) {
        items.addEventListener("click", toggleMenu)
    }
)