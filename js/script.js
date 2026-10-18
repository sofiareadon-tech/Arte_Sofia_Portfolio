var menuButton = document.getElementById('mobile-menu');
var menuLinks = document.getElementById('nav-links');

if (menuButton && menuLinks) {
    function closeMenu() {
        if (menuLinks.contains(document.activeElement)) {
            menuButton.focus();
        }

        menuLinks.classList.remove('ativo');
        menuButton.classList.remove('menu-ativo');
        document.body.classList.remove('menu-aberto');
    }

    menuButton.addEventListener('click', function () {
        if (menuLinks.classList.contains('ativo')) {
            closeMenu();
        } else {
            menuLinks.classList.add('ativo');
            menuButton.classList.add('menu-ativo');
            document.body.classList.add('menu-aberto');
        }
    });

    menuLinks.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}
