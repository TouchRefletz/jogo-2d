var nenhumaTecla;
var ultimaAnimacao;
var travaDown = false;
var travaUp = false;
var travaRight = false;
var travaLeft = false;


export function nenhumaTeclaClicada(tecla) {
    nenhumaTecla = true;
    if (teclasBaixo.includes(tecla.key) || colisao.colidindoBaixo) {
        paraDeAndarPraBaixo();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaDown = false;
    }
    if (teclasCima.includes(tecla.key) || colisao.colidindoCima) {
        paraDeAndarPraCima();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaUp = false;
    }
    if (teclasDireita.includes(tecla.key) || colisao.colidindoDireita) {
        paraDeAndarPraDireita();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaRight = false;
    }
    if (teclasEsquerda.includes(tecla.key) || colisao.colidindoEsquerda) {
        paraDeAndarPraEsquerda();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaLeft = false;
    }

    if (tecla.key == 'b') {
        for (var i = 0; i < teclasClicadas.length; i++) {
            if (teclasClicadas[i] == tecla.key) {
                if (teclasClicadas.length == 1) {
                    ultimaAnimacao = teclasClicadas[i];
                }
                teclasClicadas.splice(i, 1);
                break;
            }
        }
    }
    controlarAnimacoes();
}