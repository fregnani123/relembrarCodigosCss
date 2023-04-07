
const btnMenu = document.querySelector('.btnMenu').addEventListener('click', toglleMenu)

function toglleMenu(e){
    if(e.type === 'touchstart') e.preventDefault();
    const navBar = document.querySelector('.nav');
    navBar.classList.toggle('active')
}

