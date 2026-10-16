/* Dados do portfólio */
var portfolioData = [
    {
        title: 'Banner principal 2ª versão',
        description: 'Segunda variação do banner principal da Bloody Ruby, que explora a figura feminina poderosa em sintonia com o dramático e o vermelho.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Banner principal V2.jpg'
    },
    {
        title: 'Banner principal',
        description: 'Banner institucional da Bloody Ruby com estética romântica, dramáticaa e vermelho.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Banner principal.jpg'
    },
    {
        title: 'Bloody Ruby',
        description: 'Brandboard oficial da joalharia Bloody Ruby, incluindo a logomarca, a palete de cores e mockups da identidade visual em contextos associados.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Bloody Ruby.png',
        specialStyle: 'contain'
    },
    {
        title: 'Convite 2ª versão',
        description: 'Segunda versão do convite de lançamento da nova coleção, com uma composição mais íntima e focada nas rosas vermelhas.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Convite V2.png'
    },
    {
        title: 'Convite',
        description: 'Convite de lançamento com estética de carta de amor, selo de cera vermelha e atmosfera romântica.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Convite.jpg'
    },
    {
        title: 'Icon',
        description: 'Monograma oficial da Bloody Ruby num ambiente de opulência.',
        project: 'Bloody Ruby',
        imagePath: 'Porfólio/Bloody Ruby/Icon.jpg'
    },
    {
        title: 'A Rua',
        description: 'Cartaz da música A Rua, com tipografia em hierarquia, o olhar da protagonista e referências ao enredo.',
        project: 'Cartazes musicais',
        imagePath: 'Porfólio/Cartazes musicais/A Rua.jpg'
    },
    {
        title: 'Combo da Sorte',
        description: 'Cartaz inspirado em Combo da Sorte, com estética delicada, verde e simbolismo de união romântica e superação.',
        project: 'Cartazes musicais',
        imagePath: 'Porfólio/Cartazes musicais/Combo da Sorte.png'
    },
    {
        title: 'Morte',
        description: 'Cartaz de Morte com uma estética dramática, mística e intensa, inspirada no drama e no renascimento.',
        project: 'Cartazes musicais',
        imagePath: 'Porfólio/Cartazes musicais/Morte.jpg'
    },
    {
        title: 'Banner Principal',
        description: 'Banner principal de First Moon Blood com atmosfera gótica, herege e uma identidade visual intensa.',
        project: 'First Moon Blood',
        imagePath: 'Porfólio/First Moon Blood/Banner Principal.png'
    },
    {
        title: 'Banner Secundário',
        description: 'Banner secundário da identidade de First Moon Blood, com uma narrativa da trama da personagem e composição maisn ligada ao gótico.',
        project: 'First Moon Blood',
        imagePath: 'Porfólio/First Moon Blood/Banner Secundário.png'
    },
    {
        title: 'Icon',
        description: 'Icon de First Moon Blood com foco no mistério, no espelho e na aura vampírica da personagem.',
        project: 'First Moon Blood',
        imagePath: 'Porfólio/First Moon Blood/Icon.png'
    }
];

/* Textos dos projetos apresentados na lightbox */
var projectDetails = {
    'Bloody Ruby': {
        Objetivo: 'Desenvolver uma identidade visual coesa e luxuosa para a joalharia fictícia, com foco em luxo, elegância e atemporalidade.',
        Problema: 'Unir tradição, sofisticação e coerência visual sem cair no excesso de elementos ou ser minimalista.',
        'Processo Criativo': 'Exploração da palete de cores através do moodboard, da tipografia e da composição para criar peças que funcionem em conjunto e reforcem a identidade da marca.',
        Ferramentas: 'Figma e Affinity',
        'Resultado & Reflexão': 'Uma linguagem visual forte, elegante e consistente que representa a marca.'
    },
    'Cartazes musicais': {
        Objetivo: 'Criar cartazes com impacto visual e identidade própria para cada música e que transmitam uma narrativa.',
        Problema: 'Traduzir a atmosfera de cada canção para uma composição visual clara e coerente.',
        'Processo Criativo': 'Seleção de elementos visuais, tipografias e paletes de cor para refletir a sensibilidade de cada obra musical.',
        Ferramentas: 'Figma',
        'Resultado & Reflexão': 'Uma série de cartazes com identidade forte e coesa que contam cada um uma pequena história.'
    },
    'First Moon Blood': {
        Objetivo: 'Construir uma identidade visual sombria, intensa e poderosa para a personagem e a sua narrativa.',
        Problema: 'Equilibrar o mistério e a força para criar uma estética marcante.',
        'Processo Criativo': 'Uso de contraste, simbolismo e composição para transmitir a personalidade da personagem.',
        Ferramentas: 'Figma',
        'Resultado & Reflexão': 'Uma linguagem visual envolvente, dramática e coerente com a identidade da personagem.'
    }
};

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
        links.classList.toggle('active', isOpen);
        links.setAttribute('aria-hidden', String(!isOpen));
        menuButton.classList.toggle('is-active', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        document.body.classList.toggle('menu-open', isOpen);
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

/* Funções auxiliares da galeria */
function encodeImagePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
}

function formatCategoryId(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/* Galeria e lightbox */
function setupPortfolio() {
    var sections = document.getElementById('portfolio-sections');
    var projectTemplate = document.getElementById('portfolio-project-template');
    if (!sections || !projectTemplate) {
        return;
    }

    var lightbox = document.getElementById('lightbox');
    var image = document.getElementById('lightbox-img');
    var caption = document.getElementById('lightbox-caption');
    var counter = document.getElementById('lightbox-counter');
    var closeButton = document.querySelector('.lightbox-close');
    var previousButton = document.getElementById('lightbox-prev');
    var nextButton = document.getElementById('lightbox-next');
    var allItems = [];
    var projectGrids = [];
    var slideIndex = 1;
    var returnFocus = null;
    var updateTimer;
    var closeTimer;

    if (!lightbox || !image || !caption || !closeButton) {
        return;
    }

    function arrangeProjectGrid(projectGrid) {
        var columnCount = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
        if (projectGrid.columnCount === columnCount) {
            return;
        }

        projectGrid.columnCount = columnCount;
        projectGrid.element.textContent = '';

        var columns = [];
        for (var i = 0; i < columnCount; i++) {
            var column = projectTemplate.content.querySelector('.gallery-column').cloneNode(true);
            column.textContent = '';
            columns.push(column);
            projectGrid.element.appendChild(column);
        }

        for (var j = 0; j < projectGrid.cards.length; j++) {
            columns[j % columnCount].appendChild(projectGrid.cards[j]);
        }
    }

    function createCard(item) {
        var index = allItems.push(item) - 1;
        var column = projectTemplate.content.querySelector('.gallery-column').cloneNode(true);
        var card = column.querySelector('.demo');
        var cardImage = card.querySelector('img');
        card.dataset.slideIndex = String(index + 1);
        card.setAttribute('aria-pressed', 'false');
        card.setAttribute('aria-label', 'Ver detalhes de ' + item.title);
        cardImage.src = encodeImagePath('../' + item.imagePath);
        cardImage.alt = item.title;

        if (item.specialStyle === 'contain') {
            card.classList.add('polaroid--contain');
        }

        card.querySelector('.polaroid-caption').textContent = item.title;

        card.addEventListener('click', function () {
            currentSlide(index + 1);
            openModal();
        });
        return column;
    }

    function showProject(projectName, items) {
        var projectSection = projectTemplate.content.firstElementChild.cloneNode(true);
        var heading = projectSection.querySelector('.project-header');
        heading.id = formatCategoryId(projectName);
        heading.textContent = projectName;

        var grid = projectSection.querySelector('.gallery-grid');
        grid.setAttribute('aria-label', 'Galeria de ' + projectName);

        var cards = [];
        for (var i = 0; i < items.length; i++) {
            var column = createCard(items[i]);
            cards.push(column.querySelector('.demo'));
        }

        sections.appendChild(projectSection);
        var projectGrid = {
            element: grid,
            cards: cards,
            columnCount: 0
        };
        projectGrids.push(projectGrid);
        arrangeProjectGrid(projectGrid);
    }

    function groupProjects() {
        var projects = {};

        for (var i = 0; i < portfolioData.length; i++) {
            var item = portfolioData[i];
            var projectName = item.project;
            if (!projects[projectName]) {
                projects[projectName] = [];
            }
            projects[projectName].push(item);
        }

        var names = Object.keys(projects);
        names.sort(function (a, b) {
            return (a === 'Cartazes musicais') - (b === 'Cartazes musicais');
        });

        for (var j = 0; j < names.length; j++) {
            showProject(names[j], projects[names[j]]);
        }
    }

    function renderDetails(item) {
        var details = projectDetails[item.project];
        var html = '';

        for (var label in details) {
            html += `
                <div class="info-block">
                    <h4 class="info-block-title">${label}</h4>
                    <p>${details[label]}</p>
                </div>`;
        }
        return html;
    }

    function updateSlide(item, index) {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.96)';

        window.clearTimeout(updateTimer);
        updateTimer = window.setTimeout(function () {
            image.src = encodeImagePath('../' + item.imagePath);
            image.alt = item.title;
            caption.innerHTML = `
                <div class="lightbox-header">
                    <h3 id="lightbox-title">${item.title}</h3>
                </div>
                <p class="lightbox-item-desc">${item.description}</p>
                <div class="project-info-grid">${renderDetails(item)}</div>
                <p class="project-category"><small>${item.project}</small></p>`;

            var tag = document.createElement('span');
            tag.className = 'project-tag personal';
            tag.textContent = 'Projeto';
            caption.querySelector('.lightbox-header').appendChild(tag);

            if (counter) {
                counter.textContent = index + ' / ' + allItems.length;
            }

            image.style.opacity = '1';
            image.style.transform = 'scale(1)';
        }, 180);
    }

    function openModal() {
        window.clearTimeout(closeTimer);
        returnFocus = document.activeElement;
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.style.display = 'flex';
        document.body.classList.add('lightbox-open');
        void lightbox.offsetWidth;
        lightbox.classList.add('show');
        closeButton.focus();
    }

    function closeModal() {
        window.clearTimeout(updateTimer);
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');

        window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(function () {
            lightbox.style.display = 'none';
            image.src = '';
            if (returnFocus && returnFocus.isConnected) {
                returnFocus.focus();
            }
        }, 300);
    }

    function showSlides(n) {
        if (n > allItems.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = allItems.length;
        } else {
            slideIndex = n;
        }

        var item = allItems[slideIndex - 1];
        lightbox.setAttribute('aria-label', 'Detalhes de ' + item.title);

        var dots = sections.getElementsByClassName('demo');
        for (var i = 0; i < dots.length; i++) {
            var isActive = Number(dots[i].dataset.slideIndex) === slideIndex;
            dots[i].classList.toggle('active', isActive);
            dots[i].setAttribute('aria-pressed', String(isActive));
        }

        updateSlide(item, slideIndex);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function openProjectFromAddress() {
        var params = new URLSearchParams(window.location.search);
        var target = params.get('project') || window.location.hash.substring(1);
        if (!target) {
            return;
        }

        var categoryId = formatCategoryId(target);
        var itemIndex = allItems.findIndex(function (item) {
            return formatCategoryId(item.project) === categoryId;
        });

        if (itemIndex !== -1) {
            var heading = document.getElementById(categoryId);
            if (heading) {
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            window.setTimeout(function () {
                currentSlide(itemIndex + 1);
                openModal();
            }, 250);
            return;
        }

        var targetElement = document.getElementById(target) ||
            document.getElementById(categoryId);
        if (targetElement) {
            window.setTimeout(function () {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    groupProjects();

    window.addEventListener('resize', function () {
        for (var i = 0; i < projectGrids.length; i++) {
            arrangeProjectGrid(projectGrids[i]);
        }
    });

    closeButton.addEventListener('click', closeModal);
    if (previousButton) {
        previousButton.addEventListener('click', function () {
            plusSlides(-1);
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', function () {
            plusSlides(1);
        });
    }

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (lightbox.style.display !== 'flex') {
            return;
        }

        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            plusSlides(-1);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            plusSlides(1);
        } else if (event.key === 'Tab') {
            var focusable = lightbox.querySelectorAll('button:not([disabled])');
            var first = focusable[0];
            var last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            } else if (!lightbox.contains(document.activeElement)) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    openProjectFromAddress();
    window.addEventListener('hashchange', openProjectFromAddress);
}

/* Inicialização das funcionalidades */
setupMenu();
setupPortfolio();
