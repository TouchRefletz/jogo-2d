import * as variaveis from "/js/variaveis.js";
import * as definirTeclas from "/js/movimentacao/definirTeclas.js";

export var colidindoEsquerda = false;
export var colidindoDireita = false;
export var colidindoCima = false;
export var colidindoBaixo = false;


function verificarColisao(classeElemento) {
    var elementos = document.getElementsByClassName(classeElemento);
    setInterval(() => {
        for (var i = 0; i < elementos.length; i++) {
            var elemento = elementos[i];
            var elementoContorno = elemento.getBoundingClientRect();
            var cenarioContorno = personagem.getBoundingClientRect();     
            if (elementoContorno.left < cenarioContorno.right &&
                elementoContorno.right > cenarioContorno.left &&
                elementoContorno.top < cenarioContorno.bottom &&
                elementoContorno.bottom > cenarioContorno.top) {
                
                var direcaoColisao = {
                    cima: elementoContorno.bottom - cenarioContorno.top,
                    baixo: cenarioContorno.bottom - elementoContorno.top,
                    esquerda: elementoContorno.right - cenarioContorno.left,
                    direita: cenarioContorno.right - elementoContorno.left
                };
            
               
                if (direcaoColisao.cima < direcaoColisao.baixo &&
                    direcaoColisao.cima < direcaoColisao.esquerda &&
                    direcaoColisao.cima < direcaoColisao.direita) { 
                    app.solteiTeclaCima = true;
                    definirTeclas.trocarTeclasCima();
                    colidindoCima = true;
                } else {
                    definirTeclas.trocarTeclasCima('w', 'ArrowUp');
                    colidindoCima = false;
                }
                
               
                if (direcaoColisao.baixo < direcaoColisao.cima &&
                    direcaoColisao.baixo < direcaoColisao.esquerda &&
                    direcaoColisao.baixo < direcaoColisao.direita) {
                    app.solteiTeclaBaixo = true;
                    definirTeclas.trocarTeclasBaixo();
                    colidindoBaixo = true;
                } else {
                    definirTeclas.trocarTeclasBaixo('s', 'ArrowDown');
                    colidindoBaixo = false;
                }
                
               
                if (direcaoColisao.esquerda < direcaoColisao.cima &&
                    direcaoColisao.esquerda < direcaoColisao.baixo &&
                    direcaoColisao.esquerda < direcaoColisao.direita) {
                    app.solteiTeclaEsquerda = true;
                    definirTeclas.trocarTeclasEsquerda();
                    colidindoEsquerda = true;
                } else {
                    definirTeclas.trocarTeclasEsquerda('a', 'ArrowLeft');
                    colidindoEsquerda = false;
                }
                
                
            
                if (direcaoColisao.direita < direcaoColisao.cima &&
                    direcaoColisao.direita < direcaoColisao.baixo &&
                    direcaoColisao.direita < direcaoColisao.esquerda) { 
                    app.solteiTeclaDireita = true;
                    definirTeclas.trocarTeclasDireita();
                    colidindoDireita = true;
                } else {
                    definirTeclas.trocarTeclasDireita('d', 'ArrowRight');
                    colidindoDireita = false;
                }
            } else {
                definirTeclas.trocarTeclasCima('w, ArrowUp');
                definirTeclas.trocarTeclasBaixo('s', 'ArrowDown');
                definirTeclas.trocarTeclasEsquerda('a', 'ArrowLeft');
                definirTeclas.trocarTeclasDireita('d', 'ArrowRight');
            }
        } 
    }, 10);
}

verificarColisao('colidir');