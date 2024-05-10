export var solteiTeclaCima = false;
export function paraDeAndarPraCima() {
    solteiTeclaCima = true;
}

export var solteiTeclaBaixo = false;
export function paraDeAndarPraBaixo() {
    solteiTeclaBaixo = true;
}

export var solteiTeclaEsquerda = false;
export function paraDeAndarPraEsquerda() {
    solteiTeclaEsquerda = true;
}

export var solteiTeclaDireita = false;
export function paraDeAndarPraDireita() {
    solteiTeclaDireita = true;
}

export function trocarSolteiTeclaCima(conteudo) {
    if (conteudo == '') {
        solteiTeclaCima = '';
    }
    solteiTeclaCima = conteudo;
}

export function trocarSolteiTeclaBaixo(conteudo) {
    if (conteudo == '') {
        solteiTeclaBaixo = '';
    }
    solteiTeclaBaixo = conteudo;
}

export function trocarSolteiTeclaEsquerda(conteudo) {
    if (conteudo == '') {
        solteiTeclaEsquerda = '';
    }
    solteiTeclaEsquerda = conteudo;
}

export function trocarSolteiTeclaDireita(conteudo) {
    if (conteudo == '') {
        solteiTeclaDireita = '';
    }
    solteiTeclaDireita = conteudo;
}