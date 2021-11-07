// Mobile menu toggle
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const toggleNav = () => document.querySelector('.nav-menu').classList.toggle('mobile-menu-open');
mobileMenuBtn.addEventListener('click', toggleNav);


//Dark mode toggle
const darkModeBtn = document.querySelector('#dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.childNodes[3].classList.toggle('toggle-on');
});


// Calculates height of hero
const heroHandler = e => {
    const headerHeight = document.querySelector('header').scrollHeight;
    const bodyHeight = e.currentTarget.window.innerHeight;
    const hero = document.getElementById('hero');
    hero.style.height = bodyHeight - headerHeight+2+"px";
}

window.addEventListener('load', heroHandler);
window.addEventListener('resize', heroHandler);

const dropdownArray = document.querySelector('.nav-menu').children[0].children;
for(const item of dropdownArray) {
    item.addEventListener('click', toggleNav);
}