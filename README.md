# A Arte de Sofia — Portfólio

Portfólio pessoal de design, ilustração, fotografia e comunicação visual, apresentado num site estático com uma estética de scrapbook.

## Páginas

- `html/index.html` — apresentação e projetos em destaque
- `html/portfolio.html` — galeria de projetos
- `html/services.html` — serviços e ferramentas utilizadas
- `html/contact.html` — contactos

## Funcionalidades

- Layout responsivo para computador e dispositivos móveis
- Tema claro/escuro, com preferência guardada no navegador
- Navegação adaptada a ecrãs pequenos
- Galeria agrupada por categoria, com imagens ampliáveis, navegação por setas e teclado
- Abertura de projetos específicos através de ligações com hash ou parâmetro `project`
- Playlist Spotify incorporada
- Header e footer partilhados entre páginas

## Tecnologias

- HTML, CSS e JavaScript vanilla
- Fontes locais
- Imagens e recursos visuais locais

## Estrutura do projeto

- `html/` — páginas do site
- `css/style.css` — estilos, layout responsivo e temas
- `js/script.js` — layout partilhado, interações e galeria
- `images/` — imagens da página inicial, ícones dos serviços, favicon e outros recursos visuais
- `Porfólio/` — imagens dos projetos apresentados na galeria
- `fontes/` — tipografias locais, incluindo Lora, Amoria, Loverine, Crimson Pro e Playfair Display

As fontes Lora estão disponíveis nas versões normal e itálica.

## Organização do código

- No início de `js/script.js` estão os dados dos projetos e os textos apresentados na lightbox.
- As funções `renderHeader`, `renderSpotify` e `renderFooter` criam as partes partilhadas das páginas.
- As funções `setup...` ligam os controlos do tema, do menu, da playlist, do botão de topo e da galeria.
- Em `css/style.css`, as regras estão agrupadas por elementos comuns, páginas, lightbox, rodapé e tamanhos de ecrã.
- Cada página em `html/` contém o seu conteúdo; o cabeçalho e o rodapé são partilhados pelo JavaScript.

## Visualizar localmente

Para testar o site, sirva a pasta do projeto através de um servidor local. Com Python instalado, execute na raiz:

```powershell
python -m http.server 8000
```

Depois, abra [http://localhost:8000/html/index.html](http://localhost:8000/html/index.html) no navegador.

Também é possível abrir `html/index.html` diretamente, mas um servidor local é recomendado para testar todas as funcionalidades e os caminhos dos recursos.

## Objetivo

Apresentar o trabalho, a identidade criativa e os serviços de Sofia num portfólio acessível, visualmente consistente e funcional em diferentes dispositivos.

## Estado

Projeto em desenvolvimento e manutenção.
