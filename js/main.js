// Mobile menu toggle
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('mobile-menu-open')
});

//Dark mode toggle
const darkModeBtn = document.querySelector('#darkMode');
darkModeBtn.addEventListener('click', () => {

    darkModeBtn.classList.toggle('toggle-on');
        
    document.body.classList.toggle('mobile-menu-open')
});