function pegarElementoPorId(id) {
  return document.getElementById(id);
}

function adicionarEventoComParametro(id, tipo, funcao, direcao) {
  id.addEventListener(tipo,() => {
    funcao(direcao);
  })
}

function botoesMovimentacao(direcao) {
  var botaoAtual = pegarElementoPorId(direcao);
  adicionarEventoComParametro(botaoAtual, 'click', andar, direcao);
  atualizar();
}

function habilitarBotoes() {
  botoesMovimentacao('cima');
  botoesMovimentacao('baixo');
  botoesMovimentacao('esquerda');
  botoesMovimentacao('direita');
}

habilitarBotoes();

function andar(direcao) {
  
}

var horizontal = 0;
var vertical = 0;
function atualizar() {
  var personagem = pegarElementoPorId('personagem');
  personagem.style.top = `${vertical}px`;
  personagem.style.left = `${horizontal}px`
}