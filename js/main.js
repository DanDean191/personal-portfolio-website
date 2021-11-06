// Mobile menu toggle
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('mobile-menu-open')
});

//Dark mode toggle
const darkModeBtn = document.querySelector('#dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.childNodes[3].classList.toggle('toggle-on');
});

