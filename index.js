const menuButton = document.getElementById('menuButton');
const menuBG = document.getElementById('sideMenuBackground');
const menu = document.getElementById('sideMenu');

menuButton.addEventListener('click', function () {
    menuBG.style.display = 'block'
    menu.style.display = 'block'
    setTimeout(function () {
        menuBG.style.width = '100vw'
        menu.style.width = '80vw'
    }, 100)
});

menuBG.addEventListener('click', function () {
    menuBG.style.width = '0vw'
    menu.style.width = '0vw'
    setTimeout(function () {

        menuBG.style.display = 'none'
        menu.style.display = 'none'
    }, 500)
});

