import * as definirTeclas from "/js/movimentacao/definirTeclas.js";

export var travaImagemDireita = false;

export function trocarImagemDireita() {
    if (!travaImagemDireita) {
        personagem.src = 'assets/right.gif';
    }
}

export function trocarImagemEsquerda() {
    personagem.src = 'assets/left.gif';
}

export function trocarImagemBaixo() {
    personagem.src = 'assets/down.gif';
}

export function trocarImagemCima() {
    personagem.src = 'assets/up.gif';
}


// fazer aqui pra outras direções tbm
function concertarMovimentoEsquerdaCima() {
    for (var i = 0; i < definirTeclas.teclasClicadas.length; i++) {
        for (var j = 0; j < definirTeclas.teclasEsquerda.length; j++) {
            if (definirTeclas.teclasClicadas[i] !== definirTeclas.teclasEsquerda[j] && 
                definirTeclas.teclasCima.includes(definirTeclas.teclasClicadas[i++])) {
                    if (!travaImagemDireita) {
                        travaImagemDireita = true;
                        trocarImagemEsquerda();
                    }
                }
        }
    }
}

export function trocarTravaImagemDireita() {
    if (travaImagemDireita) {
        travaImagemDireita = false;
    } else {
        travaImagemDireita = true;
    }
}

setInterval(() => {
    concertarMovimentoEsquerdaCima();
},1);

export var travaDanca = false;
export function trocarImagemDanca() {
    if (!travaDanca) {
        personagem.src = 'assets/dance.gif';
        travaDanca = true;
    } else {
        puxarDefault(); 
        travaDanca = false;
    }
}

export function puxarDefault() {
    personagem.src = 'assets/default.gif';
}
