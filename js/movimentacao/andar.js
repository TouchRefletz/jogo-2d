function andarPraCima() {
    cima += andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaCima) {
            andarPraCima();
        }
    }, 10);
    atualizarMovimento();
}

function andarPraBaixo() {
    cima -= andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaBaixo) {
            andarPraBaixo();
        }
    }, 10);
    atualizarMovimento();
}

function andarPraEsquerda() {
    direita += andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaEsquerda) {
            andarPraEsquerda();
        }
    }, 10);
    atualizarMovimento();
}

function andarPraDireita() {
    direita -= andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaDireita) {
            andarPraDireita();
        }
    }, 10);
    atualizarMovimento();
}