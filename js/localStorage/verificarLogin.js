function verificarPrimeiraVez() {
    if (localStorage.getItem('primeiraVez') === null) {
        localStorage.setItem('primeiraVez', 'true');
        return true;
    } else {
        return false;
    }
}

export var primeiraVez = verificarPrimeiraVez();