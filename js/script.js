(function () {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark-mode');
    }
})();


const portfolioData = [
    {
        "id": 1,
        "title": "Banner principal V2",
        "description": "Segunda variação do banner principal da Bloody Ruby, que explora a figura feminina poderosa em sintonia com o dramático e o vermelho.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Banner principal V2.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 2,
        "title": "Banner principal",
        "description": "Banner institucional da Bloody Ruby com estética romântica, dramáticaa e vermelho.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Banner principal.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 3,
        "title": "Bloody Ruby",
        "description": "Brandboard oficial da joalharia Bloody Ruby, incluindo a logomarca, a palete de cores e mockups da identidade visual em contextos associados.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Bloody Ruby.png",
        "date": "2026-05-29",
        "specialStyle": "contain"
    },
    {
        "id": 4,
        "title": "Convite V2",
        "description": "Segunda versão do convite de lançamento da nova coleção, com uma composição mais íntima e focada nas rosas vermelhas.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Convite V2.png",
        "date": "2026-05-29"
    },
    {
        "id": 5,
        "title": "Convite",
        "description": "Convite de lançamento com estética de carta de amor, selo de cera vermelha e atmosfera romântica.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Convite.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 6,
        "title": "Icon",
        "description": "Monograma oficial da Bloody Ruby num ambiente de opulência.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "Bloody Ruby",
        "imagePath": "Porfólio/Bloody Ruby/Icon.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 7,
        "title": "A Rua",
        "description": "Cartaz da música A Rua, com tipografia em hierarquia, o olhar da protagonista e referências ao enredo.",
        "category": "Design",
        "subcategory": "Cartazes musicais",
        "project": "Cartazes musicais",
        "imagePath": "Porfólio/Cartazes musicais/A Rua.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 8,
        "title": "Combo da Sorte",
        "description": "Cartaz inspirado em Combo da Sorte, com estética delicada, verde e simbolismo de união romântica e superação.",
        "category": "Design",
        "subcategory": "Cartazes musicais",
        "project": "Cartazes musicais",
        "imagePath": "Porfólio/Cartazes musicais/Combo da Sorte.png",
        "date": "2026-05-29"
    },
    {
        "id": 9,
        "title": "Morte",
        "description": "Cartaz de Morte com uma estética dramática, mística e intensa, inspirada no drama e no renascimento.",
        "category": "Design",
        "subcategory": "Cartazes musicais",
        "project": "Cartazes musicais",
        "imagePath": "Porfólio/Cartazes musicais/Morte.jpg",
        "date": "2026-05-29"
    },
    {
        "id": 10,
        "title": "Banner Principal",
        "description": "Banner principal de First Moon Blood com atmosfera gótica, herege e uma identidade visual intensa.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "First Moon Blood",
        "imagePath": "Porfólio/First Moon Blood/Banner Principal.png",
        "date": "2026-05-29"
    },
    {
        "id": 11,
        "title": "Banner Secundário",
        "description": "Banner secundário da identidade de First Moon Blood, com uma narrativa da trama da personagem e composição maisn ligada ao gótico.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "First Moon Blood",
        "imagePath": "Porfólio/First Moon Blood/Banner Secundário.png",
        "date": "2026-05-29"
    },
    {
        "id": 12,
        "title": "Icon",
        "description": "Icon de First Moon Blood com foco no mistério, no espelho e na aura vampírica da personagem.",
        "category": "Design",
        "subcategory": "Identidade Visual",
        "project": "First Moon Blood",
        "imagePath": "Porfólio/First Moon Blood/Icon.png",
        "date": "2026-05-29"
    }
];

function getPortfolioItems() {
    return portfolioData;
}

function renderSharedLayout() {
    const headerTarget = document.getElementById('site-header');
    const footerTarget = document.getElementById('site-footer');
    const spotifyTarget = document.getElementById('site-spotify');

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (headerTarget) {
        headerTarget.innerHTML = `
            <header>
                <nav>
                    <span class="logo">A Arte de Sofia</span>
                    <ul class="nav-links">
                        <li><a href="index.html">Sobre Mim</a></li>
                        <li><a href="portfolio.html">Portfólio</a></li>
                        <li><a href="services.html">Serviços</a></li>
                        <li><a href="contact.html">Contactos</a></li>
                    </ul>
                    <div class="nav-actions">
                        <label class="theme-switch" for="theme-toggle" aria-label="Alternar tema">
                            <span class="theme-switch__icon">☀</span>
                            <div class="theme-switch__track">
                                <input type="checkbox" id="theme-toggle" class="theme-switch__input">
                                <div class="theme-switch__thumb"></div>
                            </div>
                            <span class="theme-switch__icon">☾</span>
                        </label>
                        <div class="menu-toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }

    if (spotifyTarget) {
        spotifyTarget.innerHTML = `
            <div id="spotify-btn" class="spotify-btn">Playlist</div>
            <div id="spotify-panel" class="spotify-panel">
                <iframe class="spotify-embed"
                    src="https://open.spotify.com/embed/playlist/73BxUSHSjRcoliJeAZDlij?utm_source=generator"
                    width="100%" height="380" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        `;
    }

    if (footerTarget) {
        footerTarget.innerHTML = `
            <footer class="site-footer">
                <div class="footer-container">
                    <div class="footer-column branding">
                        <span class="logo">A Arte de Sofia</span>
                        <p>A criar experiências visuais únicas através do design, ilustração e fotografia.</p>
                    </div>
                    <div class="footer-column links">
                        <h4 class="footer-heading">Navegação</h4>
                        <ul>
                            <li><a href="index.html">Sobre Mim</a></li>
                            <li><a href="portfolio.html">Portfólio</a></li>
                            <li><a href="services.html">Serviços</a></li>
                            <li><a href="contact.html">Contactos</a></li>
                        </ul>
                    </div>
                    <div class="footer-column contact">
                        <h4 class="footer-heading">Fala Comigo</h4>
                        <p><a href="mailto:sofiamonteiro.9@gmail.com">sofiamonteiro.9@gmail.com</a></p>
                        <p><a href="tel:+351934389802">934 389 802</a></p>
                        <div class="social-links">
                            <a href="https://instagram.com/soh_wish" target="_blank" title="Instagram">Instagram</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Sofia Silva 2026</p>
                </div>
            </footer>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderSharedLayout();

    const themeToggleInput = document.getElementById('theme-toggle');

    if (themeToggleInput) {
        themeToggleInput.checked = document.documentElement.classList.contains('dark-mode');

        themeToggleInput.addEventListener('change', () => {
            const isDark = themeToggleInput.checked;
            if (isDark) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }


    const themeSwitchLabel = document.querySelector('.theme-switch');
    const navActions = document.querySelector('.nav-actions');
    const navLinksContainer = document.querySelector('.nav-links');

    function handleResize() {
        if (window.innerWidth <= 768) {
            if (themeSwitchLabel && themeSwitchLabel.parentElement === navActions) {
                const li = document.createElement('li');
                li.id = 'theme-switch-mobile-wrapper';
                li.style.listStyle = 'none';
                li.style.marginTop = '1rem';
                li.appendChild(themeSwitchLabel);
                navLinksContainer.appendChild(li);
            }
        } else {
            const wrapper = document.getElementById('theme-switch-mobile-wrapper');
            if (wrapper && themeSwitchLabel) {
                navActions.insertBefore(themeSwitchLabel, document.getElementById('mobile-menu'));
                wrapper.remove();
            }
        }
    }

    if (themeSwitchLabel && navActions && navLinksContainer) {
        window.addEventListener('resize', handleResize);
        handleResize(); 
    }


    const spotifyBtn = document.getElementById('spotify-btn');
    const spotifyPanel = document.getElementById('spotify-panel');
    
    if (spotifyBtn && spotifyPanel) {
        spotifyBtn.addEventListener('click', () => {
            spotifyPanel.classList.toggle('open');
            if (spotifyPanel.classList.contains('open')) {
                spotifyBtn.innerHTML = '✕ Fechar';
                spotifyBtn.style.right = '320px';
            } else {
                spotifyBtn.innerHTML = 'Playlist';
                spotifyBtn.style.right = '0';
            }
        });
    }
    

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
        
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    const currentPage = window.location.pathname.split('/').pop();
    const navAnchors = document.querySelectorAll('.nav-links a');
    navAnchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) {
            anchor.classList.add('active');
        }
    });

    
    function encodeImagePath(rawPath) {
        
        const parts = rawPath.split('?');
        const pathPart = parts[0].split('/').map(seg => encodeURIComponent(seg)).join('/');
        
        
        if (parts.length > 1) {
            return pathPart + '?' + parts[1];
        }
        return pathPart;
    }


    const portfolioSections = document.getElementById('portfolio-sections');
    const lightbox           = document.getElementById('lightbox');
    const lightboxImg        = document.getElementById('lightbox-img');
    const lightboxCaption    = document.getElementById('lightbox-caption');
    const lightboxCounter    = document.getElementById('lightbox-counter');
    const lightboxClose      = document.querySelector('.lightbox-close');
    const lightboxPrev       = document.getElementById('lightbox-prev');
    const lightboxNext       = document.getElementById('lightbox-next');

    
    const projectDetails = {
        "Bloody Ruby": {
            objetivo: "Desenvolver uma identidade visual coesa e luxuosa para a joalharia fictícia, com foco em luxo, elegância e atemporalidade.",
            problema: "Unir tradição, sofisticação e coerência visual sem cair no excesso de elementos ou ser minimalista.",
            processo: "Exploração da palete de cores através do moodboard, da tipografia e da composição para criar peças que funcionem em conjunto e reforcem a identidade da marca.",
            resultado: "Uma linguagem visual forte, elegante e consistente que representa a marca."
        },
        "Cartazes musicais": {
            objetivo: "Criar cartazes com impacto visual e identidade própria para cada música e que transmitam uma narrativa.",
            problema: "Traduzir a atmosfera de cada canção para uma composição visual clara e coerente.",
            processo: "Seleção de elementos visuais, tipografias e paletes de cor para refletir a sensibilidade de cada obra musical.",
            resultado: "Uma série de cartazes com identidade forte e coesa que contam cada um uma pequena história."
        },
        "First Moon Blood": {
            objetivo: "Construir uma identidade visual sombria, intensa e poderosa para a personagem e a sua narrativa.",
            problema: "Equilibrar o mistério e a força para criar uma estética marcante.",
            processo: "Uso de contraste, simbolismo e composição para transmitir a personalidade da personagem.",
            resultado: "Uma linguagem visual envolvente, dramática e coerente com a identidade da personagem."
        }
    };

    const projectTools = {
        "Bloody Ruby": "Figma e Affinity",
        "Cartazes musicais": "Figma",
        "First Moon Blood": "Figma"
    };

    function getProjectDetails(item) {
        if (!item || !item.project) {
            return null;
        }

        const projName = item.project;
        const toolLabel = projectTools[projName] || "N/A";
        const details = projectDetails[projName] || {
            objetivo: "Criar peças visuais e designs de alta qualidade explorando novos conceitos criativos.",
            problema: "Desenvolver soluções gráficas eficazes superando as restrições estéticas e funcionais de cada projeto.",
            processo: "Pesquisa, ideação e refinamento técnico utilizando softwares e metodologias específicas.",
            resultado: "Trabalhos visuais finalizados e apelativos para exibição."
        };

        return {
            objetivo: details.objetivo,
            problema: details.problema,
            processo: details.processo,
            ferramentas: toolLabel,
            resultado: details.resultado
        };
    }

    
    let allItems     = [];
    let currentIndex = 0;

    if (portfolioSections && typeof getPortfolioItems === 'function') {
        const items = getPortfolioItems();

        
        const grouped = {};
        items.forEach(item => {
            const cat = item.category    || 'Outros';
            const sub = item.subcategory || 'Geral';
            const proj = item.project    || 'Geral';
            
            if (!grouped[cat])           grouped[cat]           = {};
            if (!grouped[cat][sub])      grouped[cat][sub]      = {};
            if (!grouped[cat][sub][proj]) grouped[cat][sub][proj] = [];
            
            grouped[cat][sub][proj].push(item);
        });

        function formatCategoryId(category) {
            return category.toLowerCase()
                .normalize('NFD')
                .replace(/[ -]/g, function(ch) {
                    return ch.normalize('NFD').replace(/[ -]/g, '');
                })
                .replace(/[ -]/g, '')
                .replace(/[ -]/g, '')
                .replace(/[ -]/g, '')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
        }

        const categoryOrder = ['Design', 'Ilustração', 'Fotografia'];
        const sortedCats = Object.keys(grouped).sort((a, b) => {
            let indexA = categoryOrder.indexOf(a);
            let indexB = categoryOrder.indexOf(b);
            if (indexA === -1) indexA = 999;
            if (indexB === -1) indexB = 999;
            return indexA - indexB;
        });

        for (const cat of sortedCats) {
            if (cat !== 'Design') {
                const catHeader = document.createElement('h2');
                catHeader.id = formatCategoryId(cat);
                catHeader.textContent = cat;
                catHeader.className = 'category-header';
                catHeader.style.marginTop = '1.5rem';
                catHeader.style.borderBottom = '2px dashed var(--light-blue)';
                catHeader.style.paddingBottom = '0.25rem';
                catHeader.style.color = 'var(--light-blue)';
                catHeader.style.textShadow = 'none';
                portfolioSections.appendChild(catHeader);
            }

            for (const sub in grouped[cat]) {
                const shouldHideSubHeader = sub === 'Identidade Visual' || sub === 'Cartazes musicais';

                if (!shouldHideSubHeader && (sub !== 'Geral' || Object.keys(grouped[cat]).length > 1)) {
                    const subHeader = document.createElement('h3');
                    subHeader.textContent = sub;
                    subHeader.className = 'subcategory-header';
                    subHeader.style.marginTop = '1rem';
                    subHeader.style.color     = 'var(--text-dark)';
                    portfolioSections.appendChild(subHeader);
                }

                for (const proj in grouped[cat][sub]) {
                    if (proj !== 'Geral') {
                        const projHeader = document.createElement('h4');
                        projHeader.textContent = proj;
                        projHeader.className = 'project-header';
                        projHeader.style.marginTop = '0.8rem';
                        projHeader.style.marginBottom = '0.5rem';
                        projHeader.style.fontFamily = 'Amoria, serif';
                        projHeader.style.setProperty('font-family', "'Amoria', serif", 'important');
                        portfolioSections.appendChild(projHeader);
                    }

                    const grid = document.createElement('section');
                    grid.className = 'gallery-grid';

                    grouped[cat][sub][proj].forEach(item => {
                        const itemIndex = allItems.length;
                        allItems.push(item);

                        const polaroid = document.createElement('div');
                        polaroid.className   = 'polaroid';
                        polaroid.style.cursor = 'pointer';

                        const img = document.createElement('img');
                        img.src     = encodeImagePath('../' + item.imagePath);
                        img.alt     = item.title || 'Portfolio Image';
                        img.loading = 'lazy';

                        if (item.specialStyle === 'contain') {
                            img.classList.add('img-contain');
                            polaroid.classList.add('polaroid--contain');
                        }

                        
                        img.addEventListener('load', () => {
                            const ratio = img.naturalHeight / img.naturalWidth;
                            if (ratio > 1.6 && item.project !== 'Identidade Visual - Bloody Ruby') {
                                polaroid.classList.add('polaroid--tall');
                            }
                        });

                        const tape = document.createElement('div');
                        tape.className = 'tape';

                        polaroid.appendChild(tape);
                        polaroid.appendChild(img);


                        if (item.category !== 'Fotografia' && item.title) {
                            const caption = document.createElement('div');
                            caption.className   = 'polaroid-caption';
                            caption.textContent = item.title;
                            polaroid.appendChild(caption);
                        } else {
                            
                            polaroid.style.paddingBottom = '20px';
                        }

                        polaroid.addEventListener('click', () => openLightbox(itemIndex));
                        grid.appendChild(polaroid);
                    });

                    portfolioSections.appendChild(grid);
                }
            }
        }



        function openLightbox(index) {
            currentIndex = index;
            updateLightboxContent();
            lightbox.style.display = 'flex';
            void lightbox.offsetWidth; // trigger reflow
            lightbox.classList.add('show');
        }

        function updateLightboxContent() {
            const item = allItems[currentIndex];

            lightboxImg.style.opacity = '0';
            lightboxImg.style.transform = 'scale(0.96)';

            setTimeout(() => {
                lightboxImg.src = encodeImagePath('../' + item.imagePath);
                lightboxImg.alt = item.title || 'Portfolio Image';
                
                let categoryInfo = item.category;
                if (item.subcategory) categoryInfo += ' › ' + item.subcategory;
                if (item.project && item.project !== 'Geral') categoryInfo += ' › ' + item.project;

                
                const tagText = 'Projeto';
                const tagClass = 'personal';

                
                if (item.category !== 'Fotografia') {
                    const details = getProjectDetails(item);
                    const infoDefinitions = [
                        ['sobre', 'Sobre a Peça'],
                        ['objetivo', 'Objetivo'],
                        ['problema', 'Desafio / Problema'],
                        ['processo', 'Processo Criativo'],
                        ['tipografia', 'Tipografia & Paleta'],
                        ['ferramentas', 'Ferramentas'],
                        ['resultado', 'Resultado & Reflexão']
                    ];

                    const gridHtml = infoDefinitions
                        .filter(([key]) => details[key])
                        .map(([key, label]) => `
                            <div class="info-block">
                                <strong>${label}</strong>
                                <span>${details[key]}</span>
                            </div>`)
                        .join('');

                    lightboxCaption.innerHTML = `
                        <div class="lightbox-header">
                            ${item.title ? `<h3>${item.title}</h3>` : ''}
                            <div class="project-tags">
                                <span class="project-tag ${tagClass}">${tagText}</span>
                            </div>
                        </div>
                        ${item.description ? `<p class="lightbox-item-desc">${item.description}</p>` : ''}
                        <div class="project-info-grid">
                            ${gridHtml}
                        </div>
                        <p class="project-category"><small>${categoryInfo}</small></p>
                    `;
                } else {

                    lightboxCaption.innerHTML = `
                        <div class="lightbox-header">
                            <div class="project-tags">
                                <span class="project-tag ${tagClass}">${tagText}</span>
                            </div>
                        </div>
                        <p class="project-category"><small>${categoryInfo}</small></p>
                    `;
                }
                
                if (lightboxCounter) {
                    lightboxCounter.textContent = `${currentIndex + 1} / ${allItems.length}`;
                }
                lightboxImg.style.opacity   = '1';
                lightboxImg.style.transform = 'scale(1)';
            }, 180);
        }

        function closeLightbox() {
            lightbox.classList.remove('show');
            setTimeout(() => {
                lightbox.style.display = 'none';
                lightboxImg.src = '';
            }, 300);
        }

        function goPrev() {
            currentIndex = (currentIndex - 1 + allItems.length) % allItems.length;
            updateLightboxContent();
        }

        function goNext() {
            currentIndex = (currentIndex + 1) % allItems.length;
            updateLightboxContent();
        }

        

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxPrev)  lightboxPrev.addEventListener('click',  (e) => { e.stopPropagation(); goPrev(); });
        if (lightboxNext)  lightboxNext.addEventListener('click',  (e) => { e.stopPropagation(); goNext(); });

        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display !== 'flex') return;
            if (e.key === 'Escape')      closeLightbox();
            if (e.key === 'ArrowLeft')   goPrev();
            if (e.key === 'ArrowRight')  goNext();
        });
    }
});




