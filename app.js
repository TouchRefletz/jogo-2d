var personagem = document.getElementById("personagem");
var body = document.getElementsByTagName('main')[0]; 
var emfoco = document.getElementById('onfocus');
var cenario = document.getElementById('cenario')
var titulo = document.getElementById('titulo');

var estilo = window.getComputedStyle(body);
var cima = parseInt(estilo.getPropertyValue('top'), 10);
var direita = parseInt(estilo.getPropertyValue('left'), 10);
var andaQuanto = 1;

var travaDown = false;
var travaUp = false;
var travaRight = false;
var travaLeft = false;
var padraoAtivar = false;
var teclasClicadas = [];

var teclasCima = ['w', 'ArrowUp'];
var teclasBaixo = ['s', 'ArrowDown'];
var teclasEsquerda = ['a', 'ArrowLeft'];
var teclasDireita = ['d', 'ArrowRight'];

var nenhumaTecla;

document.addEventListener("keydown", movimentacao);
document.addEventListener("keyup", nenhumaTeclaClicada);
window.addEventListener("blur", naoEmFoco);
window.addEventListener("focus", emFoco);

var ultimaAnimacao;
function nenhumaTeclaClicada(tecla) {
    nenhumaTecla = true;
    if (teclasBaixo.includes(tecla.key) || colidindoBaixo) {
        paraDeAndarPraBaixo();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaDown = false;
    }
    if (teclasCima.includes(tecla.key) || colidindoCima) {
        paraDeAndarPraCima();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaUp = false;
    }
    if (teclasDireita.includes(tecla.key) || colidindoDireita) {
        paraDeAndarPraDireita();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaRight = false;
    }
    if (teclasEsquerda.includes(tecla.key) || colidindoEsquerda) {
        paraDeAndarPraEsquerda();
            for (var i = 0; i < teclasClicadas.length; i++) {
                if (teclasClicadas[i] == tecla.key) {
                    if (teclasClicadas.length == 1) {
                        ultimaAnimacao = teclasClicadas[i];
                    }
                    teclasClicadas.splice(i, 1);
                    break;
                }
            }
        travaLeft = false;
    }

    if (tecla.key == 'b') {
        for (var i = 0; i < teclasClicadas.length; i++) {
            if (teclasClicadas[i] == tecla.key) {
                if (teclasClicadas.length == 1) {
                    ultimaAnimacao = teclasClicadas[i];
                }
                teclasClicadas.splice(i, 1);
                break;
            }
        }
    }
    controlarAnimacoes();
}

function controlarAnimacoes() {
            if (teclasClicadas.length === 0) {
                colocarPlaceholder();
                padraoAtivar = true;
                setTimeout(() => {
                    if (teclasClicadas.length === 0 && !travaDanca) {
                        if (padraoAtivar) {
                            irParaDefault();
                        }
                    }
                }, 1000);
            }
}

function colocarPlaceholder() {
    if (teclasEsquerda.includes(ultimaAnimacao)) {
        personagem.src = 'assets/left-placeholder.png';
    } else if (teclasDireita.includes(ultimaAnimacao)) {
        personagem.src = 'assets/right-placeholder.png';
    } else if (teclasCima.includes(ultimaAnimacao)) {
        personagem.src = 'assets/up-placeholder.png';
    } else if (teclasBaixo.includes(ultimaAnimacao)) {
        personagem.src = 'assets/down-placeholder.png';
    }
}

var padrao = false;
function irParaDefault() {
        if (!travaDown && !travaLeft && !travaRight && !travaUp && !padrao)
            puxarDefault();
        padrao = true;
        padraoAtivar = false;
}

function movimentacao(tecla) {
    nenhumaTecla = false;
    padrao = false;
    if (teclasBaixo.includes(tecla.key) && !travaDown) {
        solteiTeclaBaixo = false;
        andarPraBaixo();
        trocarImagemBaixo();
        teclasClicadas.push(tecla.key);
        travaDown = true;
    }
    if (teclasCima.includes(tecla.key) && !travaUp) {
        solteiTeclaCima = false;
        andarPraCima();
        trocarImagemCima();
        teclasClicadas.push(tecla.key);
        travaUp = true;
    }
    if (teclasDireita.includes(tecla.key) && !travaRight) {
        solteiTeclaDireita = false;
        andarPraDireita();
        trocarImagemDireita();
        teclasClicadas.push(tecla.key);
        travaRight = true;
    }
    if (teclasEsquerda.includes(tecla.key) && !travaLeft) {
        solteiTeclaEsquerda = false;
        andarPraEsquerda();
        trocarImagemEsquerda();
        teclasClicadas.push(tecla.key);
        travaLeft = true;
    }

    if (tecla.key == 'b') {
        trocarImagemDanca();
        teclasClicadas.push(tecla.key);
    }

    atualizarMovimento();
}

var solteiTeclaCima = false;
function andarPraCima() {
    cima += andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaCima) {
            andarPraCima();
        }
    }, 10);
    atualizarMovimento();
}

function paraDeAndarPraCima() {
    solteiTeclaCima = true;
}

function andarPraBaixo() {
    cima -= andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaBaixo) {
            andarPraBaixo();
        }
    }, 10);
    atualizarMovimento();
}

var solteiTeclaBaixo = false;
function paraDeAndarPraBaixo() {
    solteiTeclaBaixo = true;
}

function andarPraEsquerda() {
    direita += andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaEsquerda) {
            andarPraEsquerda();
        }
    }, 10);
    atualizarMovimento();
}

var solteiTeclaEsquerda = false;
function paraDeAndarPraEsquerda() {
    solteiTeclaEsquerda = true;
}

function andarPraDireita() {
    direita -= andaQuanto;
    setTimeout(() => {
        if (!solteiTeclaDireita) {
            andarPraDireita();
        }
    }, 10);
    atualizarMovimento();
}

var solteiTeclaDireita = false;
function paraDeAndarPraDireita() {
    solteiTeclaDireita = true;
}

function atualizarMovimento() {
    body.style.top = `${cima}px`;
    body.style.left = `${direita}px`;
}

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

function naoEmFoco() {
    body.style.opacity = '0.5';
    emfoco.style.display = 'flex';
    personagem.style.opacity = '0.5';
}

function emFoco() {
    body.style.opacity = '';
    emfoco.style.display = '';
    personagem.style.opacity = '';
}

var colidindoEsquerda = false;
var colidindoDireita = false;
var colidindoCima = false;
var colidindoBaixo = false;


function verificarColisao(classeElemento) {
    var elementos = document.getElementsByClassName(classeElemento);
    setInterval(() => {
        for (var i = 0; i < elementos.length; i++) {
            var elemento = elementos[i];
            var elementoContorno = elemento.getBoundingClientRect();
            var cenarioContorno = personagem.getBoundingClientRect();     
            if (elementoContorno.left < cenarioContorno.right &&
                elementoContorno.right > cenarioContorno.left &&
                elementoContorno.top < cenarioContorno.bottom &&
                elementoContorno.bottom > cenarioContorno.top) {
                
                var direcaoColisao = {
                    cima: elementoContorno.bottom - cenarioContorno.top,
                    baixo: cenarioContorno.bottom - elementoContorno.top,
                    esquerda: elementoContorno.right - cenarioContorno.left,
                    direita: cenarioContorno.right - elementoContorno.left
                };
            
               
                if (direcaoColisao.cima < direcaoColisao.baixo &&
                    direcaoColisao.cima < direcaoColisao.esquerda &&
                    direcaoColisao.cima < direcaoColisao.direita) { 
                    solteiTeclaCima = true;
                    teclasCima = [];
                    colidindoCima = true;
                } else {
                    teclasCima = ['w', 'ArrowUp'];
                    colidindoCima = false;
                }
                
               
                if (direcaoColisao.baixo < direcaoColisao.cima &&
                    direcaoColisao.baixo < direcaoColisao.esquerda &&
                    direcaoColisao.baixo < direcaoColisao.direita) {
                    solteiTeclaBaixo = true;
                    teclasBaixo = [];
                    colidindoBaixo = true;
                } else {
                    teclasBaixo = ['s', 'ArrowDown'];
                    colidindoBaixo = false;
                }
                
               
                if (direcaoColisao.esquerda < direcaoColisao.cima &&
                    direcaoColisao.esquerda < direcaoColisao.baixo &&
                    direcaoColisao.esquerda < direcaoColisao.direita) {
                    solteiTeclaEsquerda = true;
                    teclasEsquerda = [];
                    colidindoEsquerda = true;
                } else {
                    teclasEsquerda = ['a', 'ArrowLeft'];
                    colidindoEsquerda = false;
                }
                
                
            
                if (direcaoColisao.direita < direcaoColisao.cima &&
                    direcaoColisao.direita < direcaoColisao.baixo &&
                    direcaoColisao.direita < direcaoColisao.esquerda) { 
                    solteiTeclaDireita = true;
                    teclasDireita = [];
                    colidindoDireita = true;
                } else {
                    teclasDireita = ['d', 'ArrowRight'];
                    colidindoDireita = false;
                }
            } else {
                teclasCima = ['w', 'ArrowUp'];
                teclasBaixo = ['s', 'ArrowDown'];
                teclasEsquerda = ['a', 'ArrowLeft'];
                teclasDireita = ['d', 'ArrowRight'];
            }
        } 
    }, 10);
}

verificarColisao('colidir');

var letras = [];
function puxartitulo(titulo, novoTitulo, tamanho, puxarbotoes) {
    letras = []; 
    
    var tituloCortado = novoTitulo.split('');
    
    for (var i = 0; i < tituloCortado.length; i++) {
        if (/[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(tituloCortado[i])) {
            letras.push(tituloCortado[i]);
        } else if (tituloCortado[i] === ' ') {
            letras.push(' ');
        }
    }
    
    while (letras[0] === ' ') {
        letras.shift();
    }
    
    while (letras[letras.length - 1] === ' ') {
        letras.pop();
    }
    
    titulo.innerHTML = '';
    titulo.style.fontSize = tamanho;
    
    for (var i = 0; i < letras.length; i++) {
        setTimeout(function(index) {
            return function() {
                var span = document.createElement('span');
                span.classList.add('title');
                span.innerHTML = letras[index];
                titulo.appendChild(span);
            };
        }(i), i * 250);
    }
    
    if (puxarbotoes == 's') {
        var botoes = document.getElementsByClassName('button');
        setTimeout(function() {
            for (var i = 0; i < botoes.length; i++) {
                botoes[i].style.display = 'block';
            }
        }, (letras.length * 250) + 250); 
    }
}

function fadeout(elemento, voltar) {
    elemento.style.animationName = 'fade-out';
    elemento.style.animationDuration = '1s';
    setTimeout(() => {
        elemento.style.opacity = 0;
        if (voltar == 's') {
            setTimeout(() => {
                elemento.style.opacity = '';
            },750)
        }
    },750);
}

var menuinicial = document.getElementById('menu')
function jogar() {
    if (!primeiraVez) {
        setTimeout(() => {
            menuinicial.style.opacity = '0';
            setTimeout(() => {
                menuinicial.style.width = '0vh';
                div_personagem.style.width = '100vw';
                setTimeout(() => {
                    menuinicial.style.display = 'none';
                },1500)
            },500)
        },1000)
    } else {
        fadeout(menu, 'n')
    }
    }

// Função para verificar se o site está sendo aberto pela primeira vez
function verificarPrimeiraVez() {
    if (localStorage.getItem('primeiraVez') === null) {
        // Define um valor no local storage para indicar que o site foi aberto pela primeira vez
        localStorage.setItem('primeiraVez', 'true');
        return true;
    } else {
        return false;
    }
}

var primeiraVez = verificarPrimeiraVez();
var menu_padrao = document.getElementById("menu_default");
var div_personagem = document.getElementById("div_personagem")


window.addEventListener('load', function() {
    var telaCarregamento = document.querySelector('.tela-carregamento');
    var barraProgresso = document.querySelector('.progresso');
    var porcentagem = document.querySelector('.porcentagem');
    var carregamento = document.querySelector('.carregamento'); 
  
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', window.location.href); 
    xhr.addEventListener('progress', function(evento) {
      if (evento.lengthComputable) {
        var percentual = (evento.loaded / evento.total) * 100; 
        barraProgresso.style.width = percentual + '%';
        porcentagem.textContent = Math.round(percentual) + '%';
      }
    });
  
    xhr.onload = function() {
      carregamento.style.display = 'none';
      body.style.display = 'block';
      setTimeout(() => {
            puxartitulo(titulo, 'Criado por ToqueReflexo', '50px', 'n');
        setTimeout(() => {
            fadeout(titulo, 's');
            setTimeout(() => {
                puxartitulo(titulo, 'Um jogo bem legal ae', '100px', 's');
            },1000)
        },(letras.length * 250) + 2000);

        if (!primeiraVez) {
            menu_padrao.classList.add("menu_default");
            menuinicial.style.backgroundColor = 'rgba(0,0,0,0.5)';
            menuinicial.style.width = '100vw';
            menuinicial.style.position = 'relative';
            div_personagem.style.width = '50vw';
        }
      },1000)
    };
  
    xhr.send(); 
  });
  



