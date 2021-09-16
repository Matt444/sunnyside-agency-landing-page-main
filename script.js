const btn_hamburger = document.getElementById('navbar__hamburger');
const menu = document.getElementById('navbar__menu');

btn_hamburger.addEventListener('click', (e) => {
    menu.classList.toggle('navbar__menu--active');
});