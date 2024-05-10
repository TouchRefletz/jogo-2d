import * as definirTeclas from "/js/movimentacao/definirTeclas.js";
import * as variaveis from "/js/variaveis.js";
import * as pararDeAndar from "/js/movimentacao/pararDeAndar.js";
import * as trocarAnimacoes from "/js/animações/trocarAnimacao.js"

var padraoAtivar = false;

export function controlarAnimacoes() {
    if (definirTeclas.teclasClicadas.length === 0) {
        colocarPlaceholder();
        padraoAtivar = true;
        setTimeout(() => {
            if (definirTeclas.teclasClicadas.length === 0 && !trocarAnimacoes.travaDanca) {
                if (padraoAtivar) {
                    irParaDefault();
                }
            }
        }, 1000);
    }
}

function colocarPlaceholder() {
if (definirTeclas.teclasEsquerda.includes(pararDeAndar.ultimaAnimacao)) {
variaveis.personagem.src = 'assets/left-placeholder.png';
} else if (definirTeclas.teclasDireita.includes(pararDeAndar.ultimaAnimacao)) {
variaveis.personagem.src = 'assets/right-placeholder.png';
} else if (definirTeclas.teclasCima.includes(pararDeAndar.ultimaAnimacao)) {
variaveis.personagem.src = 'assets/up-placeholder.png';
} else if (definirTeclas.teclasBaixo.includes(pararDeAndar.ultimaAnimacao)) {
variaveis.personagem.src = 'assets/down-placeholder.png';
}
}

export var padrao = false;
function irParaDefault() {
if (!pararDeAndar.travaDown && !pararDeAndar.travaLeft && !pararDeAndar.travaRight && !pararDeAndar.travaUp && !padrao)
    trocarAnimacoes.puxarDefault();
padrao = true;
padraoAtivar = false;
}

export function trocarPadrao(conteudo) {
    if (conteudo == '') {
        padrao = '';
    }
    padrao = conteudo;
}