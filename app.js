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

function moverPersonagem(direcao, sinal) {
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
      if (!travaUp) {
        andar('cima', 'positivo');
      }
    },5)
  } else if (tecla == 'ArrowLeft' && !travaLeft && !cliqueiLeft) {
    andar('esquerda', 'negativo');
    cliqueiLeft = true;
    repeticaoLeft = setInterval(() => {
      if (!travaLeft) {
        andar('esquerda', 'negativo');
      }
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

var inimigo = pegarElementoPorId('inimigo');
function posicaoAleatoria(id) {
  var aleatorioHorizontal = Math.floor(Math.random() * (900 - 0 + 1)) + 10;
  var aleatorioVertical = Math.floor(Math.random() * (900 - 0 + 1)) + 10;
  id.style.top = `${aleatorioVertical}px`;
  id.style.left = `${aleatorioHorizontal}px`;
  if (id == personagem) {
    vertical = aleatorioVertical;
    horizontal = aleatorioHorizontal;
  }
}

posicaoAleatoria(inimigo);
posicaoAleatoria(personagem);

var intervalo = 50;
var incremento = 0.01;
var repeticaoIntervalo = setInterval(() => {
  intervalo = intervalo - intervalo * incremento;
  console.log(intervalo);
  clearInterval(repeticaoinimigo);
  repeticaoinimigo = setInterval(function() {
    irAtrasdoPersonagem();
  }, intervalo);
},1000);

var repeticaoinimigo = setInterval(function() {
  irAtrasdoPersonagem();
}, intervalo);

function irAtrasdoPersonagem() {
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
  detectarColisaoComElementos(personagem, inimigo)
},1)

function perdeu() {
  clearInterval(repeticaoinimigo);
  clearInterval(repeticaoColisao);
  clearInterval(repeticaoIntervalo);
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