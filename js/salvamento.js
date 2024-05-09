import * as app from "/js/app.js";

function salvarPosicao() {
    if (localStorage.getItem('posicaotop') === null) {
        localStorage.setItem('posicaotop', `${app.cima}`);
    } else {
        localStorage.removeItem('posicaotop');
        localStorage.setItem('posicaotop', `${app.cima}`);
    }

    if (localStorage.getItem('posicaoleft') === null) {
        localStorage.setItem('posicaoleft', `${app.direita}`);
    } else {
        localStorage.removeItem('posicaoleft');
        localStorage.setItem('posicaoleft', `${app.direita}`);
    }
}

setInterval(() => {
    salvarPosicao();
},10);