export var teclasCima = ['w', 'ArrowUp'];
export var teclasBaixo = ['s', 'ArrowDown'];
export var teclasEsquerda = ['a', 'ArrowLeft'];
export var teclasDireita = ['d', 'ArrowRight'];
export var teclasClicadas = [];

export function trocarTeclasCima(conteudo) {
    if (conteudo == '') {
        teclasCima = [];
    }
    var arrayNovo = conteudo.split(", ");
    for (var i = 0; i < arrayNovo.length; i++) {
        teclasCima[i] = arrayNovo[i];
    }
}
export function trocarTeclasBaixo(conteudo) {
    if (conteudo == '') {
        teclasBaixo = [];
    }
    var arrayNovo = conteudo.split(", ");
    for (var i = 0; i < arrayNovo.length; i++) {
        teclasBaixo[i] = arrayNovo[i];
    }
}
export function trocarTeclasEsquerda(conteudo) {
    if (conteudo == '') {
        teclasEsquerda = [];
    }
    var arrayNovo = conteudo.split(", ");
    for (var i = 0; i < arrayNovo.length; i++) {
        teclasEsquerda[i] = arrayNovo[i];
    }
}
export function trocarTeclasDireita(conteudo) {
    if (conteudo == '') {
        teclasDireita = [];
    }
    var arrayNovo = conteudo.split(", ");
    for (var i = 0; i < arrayNovo.length; i++) {
        teclasDireita[i] = arrayNovo[i];
    }
}