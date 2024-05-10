import * as variaveis from "/js/variaveis.js";

export var cima = parseInt(window.getComputedStyle(variaveis.body).getPropertyValue('top'), 10);
export var direita = parseInt(window.getComputedStyle(variaveis.body).getPropertyValue('left'), 10);

export function alterarCima(conteudo) {
    if (conteudo == '') {
        cima = '';
    }
    cima = parseInt(conteudo);
}

export function adicionarCima(conteudo) {
    if (conteudo == '') {
        cima = '';
    }
    cima += conteudo;
}

export function removerCima(conteudo) {
    if (conteudo == '') {
        cima = '';
    }
    cima -= conteudo;
}

export function alterarDireita(conteudo) {
    if (conteudo == '') {
        direita = '';
    }
    direita = conteudo;
}

export function adicionarDireita(conteudo) {
    if (conteudo == '') {
        direita = '';
    }
    direita += conteudo;
}

export function removerDireita(conteudo) {
    if (conteudo == '') {
        direita = '';
    }
    direita -= conteudo;
}