import * as variaveis from "/js/variaveis.js";
import * as gestaoDeMenu from "/js/gestaoDoMenu.js";
import * as verificarLogin from "/js/localStorage/verificarLogin.js";

var botao = document.getElementById("jogar");
botao.addEventListener("click", jogar);

function jogar() {
    if (!verificarLogin.primeiraVez) {
        setTimeout(() => {
            variaveis.menuinicial.style.opacity = '0';
            setTimeout(() => {
                variaveis.menuinicial.style.width = '0vh';
                variaveis.div_personagem.style.width = '100vw';
                setTimeout(() => {
                    variaveis.menuinicial.style.display = 'none';
                },1500)
            },500)
        },1000)
    } else {
        gestaoDeMenu.fadeout(menu, 'n')
    }
}
