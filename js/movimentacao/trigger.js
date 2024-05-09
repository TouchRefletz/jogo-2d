import * as definirteclas from "/js/movimentacao/definirTeclas.js";

export function movimentacao(tecla) {
    nenhumaTecla = false;
    padrao = false;
    if (teclasBaixo.includes(tecla.key) && !travaDown) {
        solteiTeclaBaixo = false;
        andarPraBaixo();
        trocarImagemBaixo();
        app.teclasClicadas.push(tecla.key);
        travaDown = true;
    }
    if (teclasCima.includes(tecla.key) && !travaUp) {
        solteiTeclaCima = false;
        andarPraCima();
        trocarImagemCima();
        app.teclasClicadas.push(tecla.key);
        travaUp = true;
    }
    if (teclasDireita.includes(tecla.key) && !travaRight) {
        solteiTeclaDireita = false;
        andarPraDireita();
        trocarImagemDireita();
        app.teclasClicadas.push(tecla.key);
        travaRight = true;
    }
    if (teclasEsquerda.includes(tecla.key) && !travaLeft) {
        solteiTeclaEsquerda = false;
        andarPraEsquerda();
        trocarImagemEsquerda();
        app.teclasClicadas.push(tecla.key);
        travaLeft = true;
    }

    if (tecla.key == 'b') {
        trocarImagemDanca();
        teclasClicadas.push(tecla.key);
    }

    atualizarMovimento();
}