import * as variaveis from "/js/variaveis.js";
import * as alterarVariaveisMovimentacao from '/js/movimentacao/alterarVariaveisPosicao.js';
import * as naoAndar from "/js/movimentacao/naoAndar.js";
import * as carregarPosicao from "/js/movimentacao/carregarPosicao.js";

export function andarPraCima() {
    alterarVariaveisMovimentacao.adicionarCima(variaveis.andaQuanto);
    setTimeout(() => {
        if (!naoAndar.solteiTeclaCima) {
            andarPraCima();
        }
    }, 10);
    carregarPosicao.atualizarMovimento();
}

export function andarPraBaixo() {
    alterarVariaveisMovimentacao.removerCima(variaveis.andaQuanto);
    setTimeout(() => {
        if (!naoAndar.solteiTeclaBaixo) {
            andarPraBaixo();
        }
    }, 10);
    carregarPosicao.atualizarMovimento();
}

export function andarPraEsquerda() {
    alterarVariaveisMovimentacao.adicionarDireita(variaveis.andaQuanto);    
    setTimeout(() => {
        if (!naoAndar.solteiTeclaEsquerda) {
            andarPraEsquerda();
        }
    }, 10);
    carregarPosicao.atualizarMovimento();
}

export function andarPraDireita() {
    alterarVariaveisMovimentacao.removerDireita(variaveis.andaQuanto);
    setTimeout(() => {
        if (!naoAndar.solteiTeclaDireita) {
            andarPraDireita();
        }
    }, 10);
    carregarPosicao.atualizarMovimento();
}