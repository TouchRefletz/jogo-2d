import * as variaveisPosicao from "/js/movimentacao/alterarVariaveisPosicao.js";

function salvarPosicao() {
    if (localStorage.getItem('posicaotop') === null || localStorage.getItem('posicaotop') === undefined) {
        localStorage.setItem('posicaotop', `${variaveisPosicao.cima}`);
    } else {
        localStorage.removeItem('posicaotop');
        localStorage.setItem('posicaotop', `${variaveisPosicao.cima}`);
    }

    if (localStorage.getItem('posicaoleft') === null || localStorage.getItem('posicaoleft') === undefined) {
        localStorage.setItem('posicaoleft', `${variaveisPosicao.direita}`);
    } else {
        localStorage.removeItem('posicaoleft');
        localStorage.setItem('posicaoleft', `${variaveisPosicao.direita}`);
    }
}

setInterval(() => {
    salvarPosicao();
},10);