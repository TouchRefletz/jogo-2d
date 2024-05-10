import * as variaveis from "/js/variaveis.js";
import * as onfocus from "/js/html/onfocus.js";

export function naoEmFoco() {
    onfocus.createFocus();
    variaveis.body.style.opacity = '0.5';
    onfocus.divOnFocus.style.display = 'flex';
    variaveis.personagem.style.opacity = '0.5';
}

export function emFoco() {
    onfocus.deleteFocus();
    variaveis.body.style.opacity = '';
    onfocus.divOnFocus.style.display = '';
    variaveis.personagem.style.opacity = '';
}
