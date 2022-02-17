
const mainMenu = document.querySelector('.mobile-menu-container');
const openMenu = document.querySelector('.ham-menu');
const closeMenu = document.querySelector('#closeMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '8%';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none'
}

function close() {
    mainMenu.style.top = '-100%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
   
}