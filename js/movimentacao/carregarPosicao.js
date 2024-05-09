export function recarregarPosicao() {
    if (localStorage.getItem('posicaotop') !== null) {
        var posicaoTop = localStorage.getItem('posicaotop');
        cima = parseInt(posicaoTop);
        body.style.top = `${cima}px`;
    }
    if (localStorage.getItem('posicaoleft') !== null) {
        var posicaoleft = localStorage.getItem('posicaoleft');
        direita = parseInt(posicaoleft);
        body.style.left = `${direita}px`;
    }
}

var travaPosicao = false;
function atualizarMovimento() {
        if (!travaPosicao) {
            recarregarPosicao();
            travaPosicao = true;
        }
        body.style.top = `${cima}px`;
        body.style.left = `${direita}px`;
}