export function trocarImagemDireita() {
    personagem.src = 'assets/right.gif';
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
