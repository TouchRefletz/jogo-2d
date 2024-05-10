import * as variaveisPosicao from "/js/movimentacao/alterarVariaveisPosicao.js";
import * as variaveis from "/js/variaveis.js";

export function recarregarPosicao() {
    if (localStorage.getItem('posicaotop') !== null) {
        var posicaoTop = localStorage.getItem('posicaotop');
        var alterarCimaVariavel = parseInt(posicaoTop);
        variaveisPosicao.alterarCima(alterarCimaVariavel);
        variaveis.body.style.top = `${variaveis.cima}px`;
    }
    if (localStorage.getItem('posicaoleft') !== null) {
        var posicaoleft = localStorage.getItem('posicaoleft');
        variaveisPosicao.alterarDireita(parseInt(posicaoleft));
        variaveis.body.style.left = `${variaveis.direita}px`;
    }
}

var travaPosicao = false;
export function atualizarMovimento() {
        if (!travaPosicao) {
            recarregarPosicao();
            travaPosicao = true;
        }
        variaveis.body.style.top = `${variaveisPosicao.cima}px`;
        variaveis.body.style.left = `${variaveisPosicao.direita}px`;
}