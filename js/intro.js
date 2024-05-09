import * as variaveis from "/js/variaveis.js";
import * as gestaoDeMenu from "/js/gestaoDoMenu.js";
import * as verificarLogin from "/js/localStorage/verificarLogin.js";

window.addEventListener('load', function() {
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
      variaveis.body.style.display = 'block';
      setTimeout(() => {
            gestaoDeMenu.puxartitulo(titulo, 'Criado por ToqueReflexo', '50px', 'n');
        setTimeout(() => {
            gestaoDeMenu.fadeout(titulo, 's');
            setTimeout(() => {
                gestaoDeMenu.puxartitulo(titulo, 'Utopia', '100px', 's');
            },1000)
        },(gestaoDeMenu.letras.length * 250) + 2000);

        if (!verificarLogin.primeiraVez) {
            variaveis.menu_padrao.classList.add("menu_default");
            variaveis.menuinicial.style.backgroundColor = 'rgba(0,0,0,0.5)';
            variaveis.menuinicial.style.width = '100vw';
            variaveis.menuinicial.style.position = 'relative';
            variaveis.div_personagem.style.width = '50vw';
        }
      },1000)
    };
  
    xhr.send(); 
  });
  
