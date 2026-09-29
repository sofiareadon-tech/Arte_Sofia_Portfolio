# Documentação do Projeto: A Arte de Sofia

## 1. Introdução e Objetivo do Projeto

O projeto **"A Arte de Sofia"** consiste no desenvolvimento de um website pessoal e portfólio digital, desenhado para expor o trabalho e os serviços de uma designer júnior. O objetivo central deste projeto foi criar uma plataforma estática, rápida e visualmente apelativa, baseada numa estética de *scrapbook* digital (diário gráfico), combinando tipografias serifadas, texturas de papel e elementos gráficos personalizados.

O projeto documenta igualmente o percurso de aprendizagem técnica e artística da formanda, integrando trabalhos desenvolvidos em Unidades Curriculares (como a UC 00505 — Edição de Imagens Vetoriais) e projetos pessoais de criação de marcas e identidades para campanhas de RPG e obras de baixa fantasia.

## 2. Tecnologias Utilizadas

O desenvolvimento da plataforma foi pautado pela utilização exclusiva de tecnologias web base (front-end estático), garantindo alta performance, compatibilidade e facilidade de manutenção sem dependência de ambientes de servidor (back-end):
- **HTML5:** Para a semântica e estruturação do conteúdo de todas as páginas (`index.html`, `portfolio.html`, `services.html`, `contact.html`).
- **CSS3:** Para a estilização global, animações, transições e implementação de um sistema de cores variável (suporte nativo a *Light/Dark Mode*), incluindo o uso de texturas de fundo via `background-image` em ambos os modos, Media Queries para adaptação responsiva a telemóveis e tablets, e componentes modulares de *scrapbook*.
- **JavaScript (Vanilla JS):** Para a lógica de negócio no front-end, incluindo o carregamento dinâmico e categorização hierárquica do portfólio, controlo do *lightbox* da galeria com metadados aprofundados, adaptação dinâmica de componentes mobile e persistência do tema selecionado no *LocalStorage*.

## 3. Arquitetura e Estrutura de Ficheiros

A arquitetura do projeto foi estruturada visando a modularidade e a clareza, encontrando-se dividida nas seguintes diretorias:

* **`/html/`**: Contém as quatro páginas estruturais do website:
  * `index.html`: Página inicial com apresentação pessoal em formato de nota *post-it*, assinatura artística e fotografia polaroid interativa com ligação direta à página de serviços.
  * `portfolio.html`: Página dedicada à visualização dinâmica e hierárquica da galeria de trabalhos, organizada por Categoria, Subcategoria e Projeto, com sistema integrado de Lightbox.
  * `services.html`: Apresentação das áreas de especialidade (Design, Fotografia, Copywriting e Revisão) e das ferramentas utilizadas, com ícones visuais dos programas.
  * `contact.html`: Disponibilização de contactos diretos e formulário integrado.
* **`/css/`**: Contém o ficheiro `style.css`, que centraliza toda a configuração visual, animações, responsividade (Media Queries) e o sistema de temas Claro/Escuro através de variáveis CSS (`--var`).
* **`/js/`**: Contém o ficheiro `script.js`, que integra a base de dados do portfólio em formato JSON, o mapa detalhado de especificações curriculares e técnicas de cada peça (`designItemDetails`), e a lógica interativa completa do site (galeria, lightbox dinâmico, alternância de tema, painel Spotify).
* **`/Porfólio/`**: Diretoria que armazena os ficheiros de imagem (trabalhos finais), organizados numa hierarquia estrita de *Categoria > Subcategoria > Projeto* (ex.: `Design/Affinity/Cine en Flor/`, `Design/Figma/Cartazes musicais/`, etc.).
* **`/fontes/`**: Tipografias locais utilizadas no projeto (Amoria, Lora, Crimson Pro, Playfair Display, Acros, Loverine), importadas via `@font-face`.
* **Pastas de Ativos (Assets):** Diretorias como `/serviços/`, `/homepage/` e `/images/` que guardam ícones e recursos visuais independentes do portfólio.
* **Documentação de Suporte:** `A Arte de Sofia Relatório Final.pdf`, relatório analítico e reflexivo do projeto final da formanda, utilizado como fonte de dados autêntica para documentar briefings, paletas e processos de design.

## 4. Funcionalidades Implementadas

O website integra diversas funcionalidades com foco na usabilidade, estética e experiência do utilizador (UX):

1. **Gestão de Tema (Modo Claro/Escuro):** Implementação de um botão deslizante (*toggle* de estilo telemóvel) que alterna as variáveis CSS, incluindo cores, texturas de fundo e sombras. A preferência do utilizador é gravada e recuperada automaticamente através da Web Storage API (`localStorage`). Na versão de dispositivos móveis, este botão é dinamicamente realocado para o interior do menu deslizante, otimizando a navegação. As polaroids mantêm-se em fundo branco em ambos os modos, para preservar a estética de fotografia impressa.
2. **Geração Dinâmica de Portfólio:** Através de JavaScript, as imagens são processadas e agrupadas hierarquicamente na página (Categoria → Subcategoria → Projeto). A ordem de exibição das categorias segue a sequência: *Design*, *Ilustração*, *Fotografia*. Imagens do mesmo projeto ou subcategoria partilham a mesma grelha, aparecendo lado a lado.
3. **Galeria Interativa (Lightbox) com Ficha Técnica Completa:** Visualização focada dos trabalhos num *pop-up* responsivo com navegação por setas (teclado e botões táteis). Para os projetos de Design, o lightbox exibe:
   - **Badges de Classificação:** Diferenciação visual automática entre *Projeto Académico* (ex.: Cine en Flor, Posters de Filmes) e *Projeto Pessoal* (campanhas de RPG e literatura autoral).
   - **Resumo de Destaque (`.lightbox-item-desc`):** Parágrafo introdutório contextualizando a peça específica.
   - **Grelha de Informação Modular (`.project-info-grid`):** Blocos estruturados com espaçamento generoso cobrindo *Sobre a Peça*, *Objetivo*, *Desafio / Problema*, *Processo Criativo*, *Tipografia & Paleta* (com códigos hexadecimais documentados), *Ferramentas & Técnicas*, e *Resultado & Reflexão*.
   - Para a categoria Fotografia, os títulos são omitidos deliberadamente para privilegiar o impacto visual puro, identificando apenas a subcategoria.
4. **Interatividade na Página Inicial:** A fotografia da autora funciona como elemento clicável, redirecionando o utilizador para a página de Serviços, reforçando a navegação intuitiva.
5. **Interface Responsiva Adaptada ao Ecrã Pequeno:**
   - **Layout do Post-it Inicial no Telemóvel:** A secção `.hero` em ecrãs móveis (`max-width: 768px` e `max-width: 480px`) adota disposição vertical em coluna (`flex-direction: column`). Deste modo, o post-it de apresentação (`.paper-note`) usufrui da largura total confortável do ecrã, mantendo a sua proporção clássica quadrada/retangular idêntica ao desktop, evitando que o texto fique comprimido verticalmente.
   - A fotografia polaroid (`.hero-image`) surge centralizada logo abaixo do post-it, recriando com harmonia a disposição de uma mesa de trabalho de scrapbook.
6. **Integração Externa de Multimédia:** Incorporação nativa de um *iframe* do Spotify com as permissões `autoplay`, `encrypted-media`, `fullscreen` e `picture-in-picture`, através de um painel lateral retrátil presente em todas as páginas.

## 5. Otimizações e Decisões de Design

Durante o ciclo de desenvolvimento, foram adotadas medidas com vista a otimizar a performance, a clareza técnica e a coesão visual:

- **Enriquecimento com Dados Reais do Relatório Final:** O conteúdo das fichas técnicas de Design foi meticulosamente atualizado com base no relatório final oficial. Foram registadas as paletas exatas com valores hexadecimais (ex.: quarto do Andy em `#1AC2E6` e `#E8C35C`; Cine en Flor em `#FFD7FF` e `#9DC3FF`; Ethan em `#63882D` e `#ECEBB1`; Bloody Ruby em `#7C2728`; First Moon Blood em `#691B0D`), as tipografias originais (*Kaoly*, *Loverine*, *Airbnb Cereal*, *Parchment*, *Gill Sans MT*, *Five Fonts at Freddy's*, *Alverata*, *Birthday Bounce*, *DM Serif Display*, *Kapakana*, *Lora*, etc.) e as técnicas de tratamento de imagem (como o filtro *Fraco* e *Chiaroscuro* da aplicação Polarr, e retículas *Halftone*).
- **Tipografia 100% Local:** Todas as fontes utilizadas no projeto (*Amoria*, *Lora*, *Crimson Pro*, *Playfair Display*, *Acros*, *Loverine*) estão alojadas localmente na pasta `/fontes/`, importadas via regra `@font-face`. Esta decisão elimina a dependência de redes de entrega externas (como Google Fonts), garantindo que a estética original é preservada em qualquer ambiente, mesmo sem acesso à internet.
- **Modo Escuro com Profundidade Visual:** O modo escuro foi desenhado para replicar a riqueza estética do modo claro. Inclui texturas de papel em camadas (`dark-leather`), linhas horizontais subtis simulando papel pautado, brilho difuso nos títulos de categoria, sombras profundas nos *cards*, e fita-cola em azul translúcido. As polaroids mantêm o fundo branco em ambos os modos, preservando o conceito de foto física revelada.
- **Elementos Visuais Identitários do Scrapbook:** Para manter a premissa de um *scrapbook*, foram implementados: formato "Polaroid" com rotação alternada, sombras profundas em papel sobreposto (`box-shadow`), alfinetes de pressão nos blocos de texto (`::before`), fita-cola adesiva translúcida (`tape`) e bordas tracejadas nos *cards* e menus. Estes elementos são consistentes entre o modo claro e o modo escuro.
- **Gestão de Imagens Especiais:** A imagem de marca do projeto "Bloody Ruby" utiliza um estilo especial (`specialStyle: "contain"`) que impede o corte da imagem, preservando as proporções originais do trabalho gráfico numa polaroid de tamanho reduzido.
- **Calibração Espacial dos Pop-ups:** Aumento do espaçamento entre tópicos do pop-up (`gap: 26px`, padding interno `24px 22px` e separadores pontilhados suaves), garantindo uma leitura descansada e estruturada tanto em ecrãs grandes como em dispositivos portáteis.
