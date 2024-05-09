import * as trigger from '/js/movimentacao/trigger.js';
import * as carregarPosicao from '/js/movimentacao/carregarPosicao.js';
import * as foco from '/js/foco.js';
import * as pararDeAndar from '/js/movimentacao/pararDeAndar.js';

window.addEventListener('load', carregarPosicao.recarregarPosicao);
window.addEventListener("keydown", trigger.movimentacao);
window.addEventListener("keyup", pararDeAndar.nenhumaTeclaClicada);
window.addEventListener("blur", foco.naoEmFoco);
window.addEventListener("focus", foco.emFoco);