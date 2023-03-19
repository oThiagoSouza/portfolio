const btnMenu = document.getElementById('btn-menu')


function toggleMenu(){
    const menu = document.getElementById('menu')
    menu.classList.toggle('ativo')
}


btnMenu.addEventListener('click', toggleMenu)

