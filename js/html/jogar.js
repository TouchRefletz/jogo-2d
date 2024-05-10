import * as variaveis from "/js/variaveis.js";
import * as gestaoDeMenu from "/js/gestaoDoMenu.js";
import * as verificarLogin from "/js/localStorage/verificarLogin.js";
import * as menuInicial from "/js/html/menu Inicial.js";

menuInicial.playButton.addEventListener("click", jogar);

function jogar() {
    if (!verificarLogin.primeiraVez) {
        setTimeout(() => {
          menuInicial.divMenuInicial.style.opacity = '0';
            setTimeout(() => {
          menuInicial.divMenuInicial.style.width = '0vh';
                variaveis.div_personagem.style.width = '100vw';
                setTimeout(() => {
          menuInicial.divMenuInicial.style.display = 'none';
          menuInicial.removerMenuInicial();
                },1500)
            },500)
        },1000)
    } else {
        gestaoDeMenu.fadeout(menu, 'n')
    }
}
