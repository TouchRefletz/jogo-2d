import * as pararDeAndar from "/js/movimentacao/pararDeAndar.js"
import * as colocarDefault from "/js/animações/colocarDefault.js";
import * as definirteclas from "/js/movimentacao/definirTeclas.js";
import * as naoAndar from "/js/movimentacao/naoAndar.js";
import * as andar from "/js/movimentacao/andar.js";
import * as trocarAnimacoes from "/js/animações/trocarAnimacao.js";
import * as salvarPosicoes from "/js/movimentacao/carregarPosicao.js";

export function movimentacao(tecla) {
    pararDeAndar.trocarNenhumaTecla(false);
    colocarDefault.trocarPadrao(false);
    if (definirteclas.teclasBaixo.includes(tecla.key) && !pararDeAndar.travaDown) {
        naoAndar.trocarSolteiTeclaBaixo(false);
        andar.andarPraBaixo();
        trocarAnimacoes.trocarImagemBaixo();
        definirteclas.teclasClicadas.push(tecla.key);
        pararDeAndar.trocarTravaDown(true);
    }
    if (definirteclas.teclasCima.includes(tecla.key) && !pararDeAndar.travaUp) {
        naoAndar.trocarSolteiTeclaCima(false);
        andar.andarPraCima();
        trocarAnimacoes.trocarImagemCima();
        definirteclas.teclasClicadas.push(tecla.key);
        pararDeAndar.trocarTravaUp(true);
    }
    if (definirteclas.teclasDireita.includes(tecla.key) && !pararDeAndar.travaRight) {
        naoAndar.trocarSolteiTeclaDireita(false);
        andar.andarPraDireita();
        trocarAnimacoes.trocarImagemDireita();
        definirteclas.teclasClicadas.push(tecla.key);
        pararDeAndar.trocarTravaRight(true);
    }
    if (definirteclas.teclasEsquerda.includes(tecla.key) && !pararDeAndar.travaLeft) {
        naoAndar.trocarSolteiTeclaEsquerda(false);
        andar.andarPraEsquerda();
        trocarAnimacoes.trocarImagemEsquerda();
        definirteclas.teclasClicadas.push(tecla.key);
        pararDeAndar.trocarTravaLeft(true);
    }

    if (tecla.key == 'b') {
        trocarAnimacoes.trocarImagemDanca();
        definirteclas.teclasClicadas.push(tecla.key);
    }

    salvarPosicoes.atualizarMovimento();
}