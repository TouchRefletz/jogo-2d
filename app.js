let larguraJanela;
let alturaJanela;
larguraJanela = window.innerWidth;
alturaJanela = window.innerHeight;

function pegarElementoPorId(id) {
  return document.getElementById(id);
}

function adicionarEventoComParametro(id, tipo, funcao, parametro) {
  id.addEventListener(tipo,() => {
    funcao(parametro);
  })
}

// SEPARAR POR >>>>|<<<<<
function declararArray(elementos) {
  return elementos.split(" | ");
}

var direcoes = declararArray("cima | baixo | esquerda | direita");

function repeticaoFor(parametro, codigo) {
  for (var i = 0; i < parametro; i++) {
    codigo(i);
  }
}

repeticaoFor(direcoes.length, (i) => {
  var botaoAtual = pegarElementoPorId(direcoes[i]);
  adicionarEventoComParametro(botaoAtual, 'click', andar, direcoes[i]);
}) 

var direcoesPositivas = declararArray("cima | direita");
var direcoesVerticais = declararArray("baixo | cima");

var direcao = verificarArray(direcoesVerticais, direcao, "vertical");
var sinal = verificarArray(direcoesPositivas, direcao, "positivo");

function andar(direcao, sinal) {
  moverPersonagem(direcao, sinal);
  atualizar();
}

function verificarArray(array, elemento, valor) {
  if (array.includes(elemento)) {
    return valor;
  }
}

var personagemInfo;

var pararCima; var pararBaixo; var pararDireita; var pararEsquerda;
setInterval(() => {
  personagemInfo = personagem.getBoundingClientRect();
},1)

function moverPersonagem(direcao, sinal) {
  if (personagemInfo.bottom > alturaJanela) {
    clearInterval(repeticaoDown);
    pararBaixo = true;
  } 
  
  if (personagemInfo.bottom < alturaJanela) {
    pararSeta('ArrowDown');
    pararBaixo = false;
  }

  if (personagemInfo.top < 0) {
    clearInterval(repeticaoCima);
    pararCima = true;
  } 

  if (personagemInfo.top > 0) {
    pararSeta('ArrowUp');
    pararCima = false;
  }

  if (personagemInfo.right > larguraJanela) {
    clearInterval(repeticaoRight);
    pararDireita = true;
  } 

  if (personagemInfo.right < larguraJanela) {
    pararSeta('ArrowRight');
    pararDireita = false;
  } 

  if (personagemInfo.left < 0) {
    clearInterval(repeticaoLeft);
    pararEsquerda = true;
  }
  
  if (personagemInfo.left > 0) {
    pararSeta('ArrowLeft');
    pararEsquerda = false;
  }


  if (sinal == 'positivo') {
    if (direcao == 'cima') {
      vertical--;
    } else {
      horizontal++;
    }
  } else {
    if (direcao == 'baixo') {
      vertical++;
    } else {
      horizontal--;
    }
  }
}

var travaVoltarBaixo = false;
setInterval(() => {
  if (pararBaixo) {
    travaVoltarBaixo = false;
     travaDown = true;
     cliqueiDown = true;
 } 
 if (!pararBaixo) {
  if (!travaVoltarBaixo) {
    travaVoltarBaixo = true;
    travaDown = false;
    cliqueiDown = false;
  }
 }
},5)

var travaVoltarCima = false;
setInterval(() => {
  if (pararCima) {
    travaVoltarCima = false;
    travaUp = true;
    cliqueiUp = true;
 } 
 if (!pararCima) {
  if (!travaVoltarCima) {
    travaVoltarCima = true;
    travaUp = false;
    cliqueiUp = false;
  }
 }
},5)

var travaVoltarDireita = false;
setInterval(() => {
  if (pararDireita) {
    travaVoltarDireita = false;
    travaRight = true;
    cliqueiRight = true;
 } 
 if (!pararDireita) {
  if (!travaVoltarDireita) {
    travaVoltarDireita = true;
    travaRight = false;
    cliqueiRight = false;
  }
 }
},5)

var travaVoltarEsquerda = false;
setInterval(() => {
  if (pararEsquerda) {
    travaVoltarEsquerda = false;
    travaLeft = true;
    cliqueiLeft = true;
 } 
 if (!pararEsquerda) {
  if (!travaVoltarEsquerda) {
    travaVoltarEsquerda = true;
    travaLeft = false;
    cliqueiLeft = false;
  }
 }
},5)

var horizontal = 0;
var vertical = 0;

function atualizar() {
  var personagem = pegarElementoPorId('personagem');
  personagem.style.top = `${vertical}px`;
  personagem.style.left = `${horizontal}px`;
}

function andarSetas() {
  document.addEventListener('keydown', (i) => {
    andarComSeta(i.key);

    if (i.key == 'p') {
      pausarJogo();
    }
  });
  document.addEventListener('keyup', (i) => {
    pararSeta(i);
  });
}

andarSetas();

var repeticaoCima; var repeticaoLeft; var repeticaoDown; var repeticaoRight;

function andarComSeta(tecla) {
  if (tecla == 'ArrowUp' && !travaUp && !cliqueiUp) {
    andar('cima', 'positivo');
    cliqueiUp = true;
    repeticaoCima = setInterval(() => {
        andar('cima', 'positivo');
    },5)
  } else if (tecla == 'ArrowLeft' && !travaLeft && !cliqueiLeft) {
    andar('esquerda', 'negativo');
    cliqueiLeft = true;
    repeticaoLeft = setInterval(() => {
        andar('esquerda', 'negativo');
    },5)
  } else if (tecla == 'ArrowDown' && !travaDown && !cliqueiDown) {
    andar('baixo', 'negativo');
    cliqueiDown = true;
    repeticaoDown = setInterval(() => {
      andar('baixo', 'negativo');
    },5)
  } else if (tecla == 'ArrowRight' && !travaRight && !cliqueiRight) {
    andar('direita', 'positivo');
    cliqueiRight = true;
    repeticaoRight = setInterval(() => {
      andar('direita', 'positivo');
    }, 5);
  }
}

var cliqueiUp = false; cliqueiLeft = false; var cliqueiDown = false; var cliqueiRight = false;


var travaUp = false; var travaLeft = false; var travaRight = false; var travaDown = false;


function pararSeta(tecla) {
   if (tecla.key == 'ArrowUp') {
    clearInterval(repeticaoCima);
    cliqueiUp = false;
    travaUp = false;
   } else if (tecla.key == 'ArrowLeft') {
    clearInterval(repeticaoLeft);
    cliqueiLeft = false;
    travaLeft = false;
   } else if (tecla.key == 'ArrowRight') {
    clearInterval(repeticaoRight);
    cliqueiRight = false;
    travaRight = false;
   } else if (tecla.key == 'ArrowDown') {
    clearInterval(repeticaoDown);
    cliqueiDown = false;
    travaDown = false;
   }
}

var inimigos = [];
function posicaoAleatoria(id) {
  var aleatorioHorizontal = Math.floor(Math.random() * larguraJanela);
  var aleatorioVertical = Math.floor(Math.random() * alturaJanela);
  id.style.top = `${aleatorioVertical}px`;
  id.style.left = `${aleatorioHorizontal}px`;
  var idInfo = id.getBoundingClientRect();

  if (idInfo.bottom > alturaJanela) {
    posicaoAleatoria(id);
  }
  if (idInfo.top < 0) {
    posicaoAleatoria(id);
  }

  if (idInfo.right > larguraJanela) {
    posicaoAleatoria(id);
  }

  if (idInfo.left < 0) {
    posicaoAleatoria(id);
 }

  if (id == personagem) {
    vertical = aleatorioVertical;
    horizontal = aleatorioHorizontal;
  }
}

var posicaoPersonagem = posicaoAleatoria(personagem);
function resolverColisao(inimigo) {
  var DeuMerda = detectarColisaoComElementos(inimigo, personagem);
  
  if (DeuMerda) {
   resolverColisao(); 
  }
}

var intervalo = 75;
var incremento = 0.01;
var repeticaoIntervalo = setInterval(() => {
  intervalo = intervalo - intervalo * incremento;
  clearInterval(repeticaoinimigo);
  repeticaoinimigo = setInterval(function() {
    inimigos.forEach((inimigo) => {
      irAtrasdoPersonagem(inimigo)
    })
  }, intervalo);
},1000);

var repeticaoinimigo = setInterval(function() {
  inimigos.forEach((inimigo) => {
    irAtrasdoPersonagem(inimigo);
  })
}, intervalo);

var intervaloInimigo = setInterval(() => {
  criarInimigo();
},intervalo * 10)

var jogo = document.getElementById('jogo');
function criarInimigo() {
  var inimigoNovo = document.createElement('div');
  inimigoNovo.className = 'inimigo';
  posicaoAleatoria(inimigoNovo);
  inimigos.push(inimigoNovo);
  jogo.appendChild(inimigoNovo);
}
criarInimigo();

function irAtrasdoPersonagem(inimigo) {
  var personagemTop = parseInt(personagem.style.top.replace('px', ''));
  var inimigoTop = parseInt(inimigo.style.top.replace('px', ''));
  var personagemLeft = parseInt(personagem.style.left.replace('px', ''));
  var inimigoLeft = parseInt(inimigo.style.left.replace('px', ''));
 
    if (inimigoTop > personagemTop) {
      inimigo.style.top = `${parseInt(inimigoTop) - 1}px`;
    }
    
    if (inimigoTop < personagemTop) {
      inimigo.style.top = `${parseInt(inimigoTop) + 1}px`;
    }
    
    if (inimigoTop == personagemTop) {
      
    }
    
    if (inimigoLeft > personagemLeft) {
      inimigo.style.left = `${parseInt(inimigoLeft) - 1}px`;
    }
    
    if (inimigoLeft < personagemLeft) {
      inimigo.style.left = `${parseInt(inimigoLeft) + 1}px`;
    }
    
    if (inimigoLeft == personagemLeft) {
      
    }
}

function detectarColisaoComElementos(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  if (rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top) {
    perdeu();
    return true;
  }
  return false;
}

var repeticaoColisao = setInterval(() => {
  inimigos.forEach((inimigo) => {
    detectarColisaoComElementos(personagem, inimigo);
  })
},1)

function perdeu() {
  clearInterval(repeticaoinimigo);
  clearInterval(repeticaoColisao);
  clearInterval(repeticaoIntervalo);
  clearInterval(intervaloInimigo);
  setInterval(() => {
    cliqueiDown = true; cliqueiLeft = true; cliqueiRight = true; cliqueiUp = true;
    travaDown = true; travaLeft = true; travaRight = true; travaUp = true;
    clearInterval(repeticaoCima);
    clearInterval(repeticaoDown);
    clearInterval(repeticaoLeft);
    clearInterval(repeticaoRight);  
  },1)
  
  // FAZER OUTRA COISA AQUI PRA INDICAR QUE PERDEU
  console.log('você perdeu!')
}

setInterval(() => {
  larguraJanela = window.innerWidth;
  alturaJanela = window.innerHeight;
}, 5);

function voltarJogo() {
  repeticaoColisao = setInterval(() => {
    detectarColisaoComElementos(personagem, inimigo)
  },1)
  repeticaoinimigo = setInterval(function() {
    irAtrasdoPersonagem();
  }, intervalo);
  repeticaoIntervalo = setInterval(() => {
    intervalo = intervalo - intervalo * incremento;
    clearInterval(repeticaoinimigo);
    repeticaoinimigo = setInterval(function() {
      irAtrasdoPersonagem();
    }, intervalo);
  },1000);
}

var pausado = false;
var intervaloPausa;
function pausarJogo() {
  if (!pausado) {
    pausado = true;
    clearInterval(repeticaoinimigo);
    clearInterval(repeticaoColisao);
    clearInterval(repeticaoIntervalo);
    clearInterval(intervaloInimigo);
    intervaloPausa = setInterval(() => {
      cliqueiDown = true; cliqueiLeft = true; cliqueiRight = true; cliqueiUp = true;
      travaDown = true; travaLeft = true; travaRight = true; travaUp = true;
      clearInterval(repeticaoCima);
      clearInterval(repeticaoDown);
      clearInterval(repeticaoLeft);
      clearInterval(repeticaoRight); 
    },1)
    console.log('jogo pausado');
  } else {
    pausado = false;
    voltarJogo();
    cliqueiDown = false; cliqueiLeft = false; cliqueiRight = false; cliqueiUp = false;
      travaDown = false; travaLeft = false; travaRight = false; travaUp = false;
    clearInterval(intervaloPausa);
    console.log('jogo despausado');
  }
}