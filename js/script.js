/* Navegação */
function setupMenu() {
    var menuButton = document.getElementById('mobile-menu');
    var links = document.getElementById('nav-links');

    if (!menuButton || !links) {
        return;
    }

    function setMenuOpen(isOpen) {
        if (!isOpen && links.contains(document.activeElement)) {
            menuButton.focus();
        }
        links.classList.toggle('ativo', isOpen);
        links.setAttribute('aria-hidden', String(!isOpen));
        menuButton.classList.toggle('menu-ativo', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        document.body.classList.toggle('menu-aberto', isOpen);
    }

    setMenuOpen(false);

    menuButton.addEventListener('click', function () {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    links.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            setMenuOpen(false);
        }
    });
}

/* Galeria e lightbox */
function setupPortfolio() {
    var gallery = document.getElementById('portfolio-sections');
    var lightbox = document.getElementById('lightbox');
    if (!gallery || !lightbox) return;

    var slides = Array.from(lightbox.querySelectorAll('.diapositivo-ampliado'));
    var thumbnails = Array.from(gallery.querySelectorAll('.item-portfolio'));
    var details = Array.from(lightbox.querySelectorAll('[data-project-details]'));
    var counter = document.getElementById('lightbox-counter');
    var index = 0;
    var returnFocus;
    var closeTimer;

    if (!slides.length) return;
    thumbnails.forEach(function (thumbnail) {
        thumbnail.setAttribute('aria-pressed', 'false');
    });

    function showSlides(number) {
        if (number > slides.length) number = 1;
        if (number < 1) number = slides.length;
        index = number;

        slides.forEach(function (slide, slideIndex) {
            slide.style.display = slideIndex === index - 1 ? 'block' : 'none';
        });
        var project = slides[index - 1].dataset.project;
        details.forEach(function (detail) {
            detail.style.display = detail.dataset.projectDetails === project ? 'flex' : 'none';
        });
        thumbnails.forEach(function (thumbnail) {
            thumbnail.setAttribute('aria-pressed', String(Number(thumbnail.dataset.slide) === index));
        });
        lightbox.setAttribute('aria-labelledby', 'lightbox-title-' + index);
        if (counter) counter.textContent = index + ' / ' + slides.length;
    }

    function openModal(number) {
        window.clearTimeout(closeTimer);
        if (lightbox.style.display !== 'flex') returnFocus = document.activeElement;
        showSlides(number);
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.style.display = 'flex';
        document.body.classList.add('ampliacao-aberta');
        void lightbox.offsetWidth;
        lightbox.classList.add('visivel');
        document.querySelector('.fechar-ampliacao').focus();
    }

    function closeModal() {
        lightbox.classList.remove('visivel');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('ampliacao-aberta');
        window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(function () {
            lightbox.style.display = 'none';
            if (returnFocus && returnFocus.isConnected) returnFocus.focus();
        }, 300);
    }

    function plusSlides(amount) {
        showSlides(index + amount);
    }

    function openProjectFromAddress() {
        var target = new URLSearchParams(window.location.search).get('project') || window.location.hash.slice(1);
        if (!target) return;
        var section = Array.from(gallery.querySelectorAll('.secao-projeto')).find(function (project) {
            return project.id.toLowerCase() === target.toLowerCase().replace(/\s+/g, '-') ||
                project.dataset.project.toLowerCase() === target.toLowerCase();
        });
        if (!section) return;

        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.setTimeout(function () {
            openModal(Number(section.querySelector('.item-portfolio').dataset.slide));
        }, 250);
    }

    gallery.addEventListener('click', function (event) {
        var slide = event.target.closest('.item-portfolio');
        if (slide) openModal(Number(slide.dataset.slide));
    });

    lightbox.querySelector('.fechar-ampliacao').addEventListener('click', closeModal);
    lightbox.querySelector('.anterior-ampliacao').addEventListener('click', function () {
        plusSlides(-1);
    });
    lightbox.querySelector('.seguinte-ampliacao').addEventListener('click', function () {
        plusSlides(1);
    });
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) closeModal();
    });
    document.addEventListener('keydown', function (event) {
        if (lightbox.style.display !== 'flex') return;
        if (event.key === 'Escape') closeModal();
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            plusSlides(event.key === 'ArrowLeft' ? -1 : 1);
        }
        if (event.key === 'Tab') {
            var buttons = lightbox.querySelectorAll('button:not([disabled])');
            var first = buttons[0];
            var last = buttons[buttons.length - 1];
            if ((event.shiftKey && document.activeElement === first) ||
                (!event.shiftKey && document.activeElement === last) ||
                !lightbox.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            }
        }
    });

    openProjectFromAddress();
    window.addEventListener('hashchange', openProjectFromAddress);
}

/* Inicialização das funcionalidades */
setupMenu();
setupPortfolio();
