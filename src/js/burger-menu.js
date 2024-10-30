let desktopMenu = document.querySelector('.desktop-menu');
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger-close');
let body = document.querySelector('.body');

function addClassToBurger() {
    if (window.innerWidth <= 1120) {
        desktopMenu.classList.add('header-mobile-menu');
    }
}

burger.addEventListener('click', function() {
    desktopMenu.classList.add('header-mobile-menu_open');
    body.classList.add('body_burger');
})

burgerClose.addEventListener('click', closeBurger);
document.addEventListener('keydown', clickEscMenu);
desktopMenu.addEventListener('click', clickOutBurger);

function clickEscMenu(e) {
    if (e.key === 'Escape' && desktopMenu.classList.contains('header-mobile-menu_open')) {
        closeBurger();
    }
}

function clickOutBurger(e) {
    const isClickInsideBurger = e.target.closest('.header-mobile-menu');

    if (!isClickInsideBurger) {
        console.log(1);
        closeBurger();
    } else {
        console.log(isClickInsideBurger);
        console.log(e.target);
        console.log(2);
        return true;
    }
}

function closeBurger() {
    desktopMenu.classList.remove('header-mobile-menu_open');
    body.classList.remove('body_burger');
}


window.addEventListener('resize', addClassToBurger);