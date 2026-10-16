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
- Galeria com janela de ampliação, navegação entre imagens e fecho com `Escape`
- Abertura de projetos específicos através de uma âncora ou do parâmetro `project`
- Formulário de contacto que prepara uma mensagem na aplicação de e-mail predefinida
- Fundo com textura local e ícone do separador do navegador

## Tecnologias

- HTML, CSS e JavaScript sem bibliotecas adicionais
- Fontes locais, incluindo Lora nas versões normal e itálica
- Imagens e recursos visuais locais

## Estrutura do projeto

- `html/` — páginas do site
- `css/style.css` — estilos, disposição adaptável, galerias e janela de ampliação
- `js/script.js` — interações e navegação da galeria
- `images/` — imagens da página inicial, ícones dos serviços, favicon e outros recursos visuais
- `Porfólio/` — imagens dos projetos apresentados na galeria
- `fontes/` — tipografias locais, incluindo Lora, Amoria, Loverine, Crimson Pro e Playfair Display

## Organização do código

- Os dados dos projetos e os textos apresentados na janela de ampliação estão no HTML de `html/portfolio.html`.
- A navegação e o rodapé estão escritos diretamente nos ficheiros HTML.
- O JavaScript controla o menu, a galeria e a navegação entre imagens; as setas esquerda e direita mudam de imagem na janela de ampliação.
- As classes CSS usam nomes em português sempre que possível.
- `css/style.css` agrupa os estilos por áreas e tamanhos de ecrã, com regras compactas para reduzir o código.
- Cada página contém o seu próprio cabeçalho e rodapé.

## Abrir um projeto diretamente

Na página do portfólio, é possível abrir um projeto específico usando o respetivo identificador ou nome:

- `html/portfolio.html#bloody-ruby`
- `html/portfolio.html?project=First%20Moon%20Blood`

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
