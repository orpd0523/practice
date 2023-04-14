// console.log("I am connected!")

const menu = document.querySelector('.nav__links')
const items = document.querySelectorAll('.nav__item')
const burger = document.querySelector('.nav__burger')
const close = document.querySelector('.closeIcon')
const open = document.querySelector('.menuIcon')
const button = document.getElementById('#button')

const toggleMenu = () => {
    if (menu.classList.contains("nav__links")) {
        menu.classList.remove('nav__links')
        menu.style.visibility = "hidden"
        close.style.display = "none"
        open.style.display = "block"
    } else {
        menu.classList.add("nav__links")
        close.style.display = "block"
        open.style.display = "none"
        menu.style.visibility = "visible"
    }
    
}

burger.addEventListener("click", toggleMenu)

items.forEach(
    function (items) {
        items.addEventListener("click", toggleMenu)
    }
)

const hide = () => {
    let element = document.getElementById("hide")
    element.classList.toggle('hidden');
    // if (element.style.display === "none") {
        // element.style.display = "block"
    // } else {
        // element.style.display = "visible"
    // }
}

// hide(button)