var botaoMenu = document.getElementById('botao-menu');
var ligacoesMenu = document.getElementById('lista-navegacao');

function fecharMenu() {
    if (ligacoesMenu.contains(document.activeElement)) {
        botaoMenu.focus();
    }

    ligacoesMenu.classList.remove('ativo');
    botaoMenu.classList.remove('menu-ativo');
    document.body.classList.remove('menu-aberto');
}

if (botaoMenu && ligacoesMenu) {
    botaoMenu.addEventListener('click', function () {
        if (ligacoesMenu.classList.contains('ativo')) {
            fecharMenu();
        } else {
            ligacoesMenu.classList.add('ativo');
            botaoMenu.classList.add('menu-ativo');
            document.body.classList.add('menu-aberto');
        }
    });

    var ligacoes = ligacoesMenu.getElementsByTagName('a');
    for (var i = 0; i < ligacoes.length; i++) {
        ligacoes[i].addEventListener('click', fecharMenu);
    }

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') {
            fecharMenu();
        }
    });
}
