var padraoAtivar = false;

function controlarAnimacoes() {
    if (teclasClicadas.length === 0) {
        colocarPlaceholder();
        padraoAtivar = true;
        setTimeout(() => {
            if (teclasClicadas.length === 0 && !travaDanca) {
                if (padraoAtivar) {
                    irParaDefault();
                }
            }
        }, 1000);
    }
}

function colocarPlaceholder() {
if (teclasEsquerda.includes(ultimaAnimacao)) {
personagem.src = 'assets/left-placeholder.png';
} else if (teclasDireita.includes(ultimaAnimacao)) {
personagem.src = 'assets/right-placeholder.png';
} else if (teclasCima.includes(ultimaAnimacao)) {
personagem.src = 'assets/up-placeholder.png';
} else if (teclasBaixo.includes(ultimaAnimacao)) {
personagem.src = 'assets/down-placeholder.png';
}
}

var padrao = false;
function irParaDefault() {
if (!travaDown && !travaLeft && !travaRight && !travaUp && !padrao)
    puxarDefault();
padrao = true;
padraoAtivar = false;
}