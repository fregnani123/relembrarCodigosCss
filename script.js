
const btnMenu = document.querySelector('.btnMenu');

function toglleMenu(e){
    if(e.type === 'touchstart') e.preventDefault();
    const navBar = document.querySelector('.nav');
    navBar.classList.toggle('active')
}

btnMenu.addEventListener('click', toglleMenu)
