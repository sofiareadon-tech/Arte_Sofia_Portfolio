# A Arte de Sofia — Portfólio

Portfólio pessoal de design, ilustração, fotografia e comunicação visual, apresentado num site estático com uma estética de álbum de recortes.

## Páginas

- `html/index.html` — apresentação e projetos em destaque
- `html/portfolio.html` — galeria de projetos
- `html/services.html` — serviços e ferramentas utilizadas
- `html/contact.html` — contactos

## Funcionalidades

- Layout responsivo para computador e dispositivos móveis
- Menu de navegação adaptado a computadores e dispositivos móveis, com controlo por teclado
- Galeria de projetos com descrições e legendas apresentadas na página
- Formulário de contacto que prepara uma mensagem na aplicação de e-mail predefinida
- Fundo com textura local e ícone do separador do navegador

## Tecnologias

- HTML, CSS e JavaScript sem bibliotecas adicionais
- Fontes locais, incluindo Lora nas versões normal e itálica
- Imagens e recursos visuais locais

## Estrutura do projeto

- `html/` — páginas do site
- `css/style.css` — estilos e disposição adaptável das páginas
- `js/script.js` — abre e fecha o menu de navegação
- `images/` — imagens da página inicial, ícones dos serviços, favicon e outros recursos visuais
- `Porfólio/` — imagens dos projetos apresentados na galeria
- `fontes/` — tipografias locais, incluindo Lora, Amoria, Loverine, Crimson Pro e Playfair Display

## Organização do código

- Os projetos, descrições e legendas estão no HTML de `html/portfolio.html`.
- A navegação e o rodapé estão escritos diretamente nos ficheiros HTML.
- O JavaScript controla o menu de navegação, que também pode ser fechado com `Escape`.
- As classes CSS usam nomes em português sempre que possível.
- `css/style.css` separa os estilos por áreas e tamanhos de ecrã.
- Cada página contém o seu próprio cabeçalho e rodapé.

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
