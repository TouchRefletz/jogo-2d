export var letras = [];
export function puxartitulo(titulo, novoTitulo, tamanho, puxarbotoes) {
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

export function fadeout(elemento, voltar) {
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