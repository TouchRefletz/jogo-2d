function trocarImagemDireita() {
    personagem.src = 'assets/right.gif';
}

function trocarImagemEsquerda() {
    personagem.src = 'assets/left.gif';
}

function trocarImagemBaixo() {
    personagem.src = 'assets/down.gif';
}

function trocarImagemCima() {
    personagem.src = 'assets/up.gif';
}

var travaDanca = false;
function trocarImagemDanca() {
    if (!travaDanca) {
        personagem.src = 'assets/dance.gif';
        travaDanca = true;
    } else {
        puxarDefault(); 
        travaDanca = false;
    }
}

function puxarDefault() {
    personagem.src = 'assets/default.gif';
}
