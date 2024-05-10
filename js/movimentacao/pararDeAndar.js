import * as definirTeclas from "/js/movimentacao/definirTeclas.js";
import * as colisao from "/js/colisao.js";
import * as naoAndar from "/js/movimentacao/naoAndar.js";
import * as colocarDefault from "/js/animações/colocarDefault.js";

var nenhumaTecla;
export var ultimaAnimacao;
export var travaDown = false;
export var travaUp = false;
export var travaRight = false;
export var travaLeft = false;


export function nenhumaTeclaClicada(tecla) {
    nenhumaTecla = true;
    if (definirTeclas.teclasBaixo.includes(tecla.key) || colisao.colidindoBaixo) {
        naoAndar.paraDeAndarPraBaixo();
            for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
                if (definirTeclas.teclasClicadas[i] == tecla.key) {
                    if (definirTeclas.teclasClicadas.length == 1) {
                        ultimaAnimacao = definirTeclas.teclasClicadas[i];
                    }
                    definirTeclas.teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaDown = false;
    }
    if (definirTeclas.teclasCima.includes(tecla.key) || colisao.colidindoCima) {
        naoAndar.paraDeAndarPraCima();
            for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
                if (definirTeclas.teclasClicadas[i] == tecla.key) {
                    if (definirTeclas.teclasClicadas.length == 1) {
                        ultimaAnimacao = definirTeclas.teclasClicadas[i];
                    }
                    definirTeclas.teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaUp = false;
    }
    if (definirTeclas.teclasDireita.includes(tecla.key) || colisao.colidindoDireita) {
        naoAndar.paraDeAndarPraDireita();
            for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
                if (definirTeclas.teclasClicadas[i] == tecla.key) {
                    if (definirTeclas.teclasClicadas.length == 1) {
                        ultimaAnimacao = definirTeclas.teclasClicadas[i];
                    }
                    definirTeclas.teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaRight = false;
    }
    if (definirTeclas.teclasEsquerda.includes(tecla.key) || colisao.colidindoEsquerda) {
        naoAndar.paraDeAndarPraEsquerda();
            for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
                if (definirTeclas.teclasClicadas[i] == tecla.key) {
                    if (definirTeclas.teclasClicadas.length == 1) {
                        ultimaAnimacao = definirTeclas.teclasClicadas[i];
                    }
                    definirTeclas.teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaLeft = false;
    }

    if (tecla.key == 'b') {
        for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
            if (definirTeclas.teclasClicadas[i] == tecla.key) {
                if (definirTeclas.teclasClicadas.length == 1) {
                    ultimaAnimacao = definirTeclas.teclasClicadas[i];
                }
                definirTeclas.teclasClicadas.splice(i, 1);
                break;
            }
        }
    }
    colocarDefault.controlarAnimacoes();
}

export function trocarNenhumaTecla(conteudo) {
    if (conteudo == '') {
        nenhumaTecla = '';
    }
    nenhumaTecla = conteudo;
}

export function trocarTravaUp(conteudo) {
    if (conteudo == '') {
        travaUp = '';
    }
    travaUp = conteudo;
}

export function trocarTravaLeft(conteudo) {
    if (conteudo == '') {
        travaLeft = '';
    }
    travaLeft = conteudo;
}

export function trocarTravaRight(conteudo) {
    if (conteudo == '') {
        travaRight = '';
    }
    travaRight = conteudo;
}

export function trocarTravaDown(conteudo) {
    if (conteudo == '') {
        travaDown = '';
    }
    travaDown = conteudo;
}