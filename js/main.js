const btn_menu = document.querySelector('.menu');
const nav_menu = document.querySelector('.nav-menu');

const navigation = document.querySelector('.navigation');

btn_menu.addEventListener('click', () => {
    nav_menu.classList.toggle('nav-active');
    if (navigation.style.color == 'white') {
        navigation.style.color = 'black';
    } else {
        navigation.style.color = 'white';
    }

})


