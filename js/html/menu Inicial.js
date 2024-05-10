import * as variaveis from "/js/variaveis.js"

export var divPrincipalMenuDefault = document.createElement("div");
  divPrincipalMenuDefault.id = 'menu_default';
  
  export var divMenuInicial = document.createElement('div');
  divMenuInicial.id = 'menu';
  divMenuInicial.classList.add('menu-inicial');
  
  var title = document.createElement('h1')
  title.id = 'titulo';
  title.classList.add('title');
  
  var divBotoes = document.createElement('div');
  
  export var playButton = document.createElement('a');
  playButton.id = 'jogar';
  playButton.classList.add('button');
  playButton.innerHTML = 'jogar';
  
  var configButton = document.createElement('a');
  configButton.id = 'config';
  configButton.classList.add('button');
  configButton.innerHTML = 'config';
  
  var aboutButton = document.createElement('a');
  aboutButton.id = 'about';
  aboutButton.classList.add('button');
  aboutButton.innerHTML = 'sobre';
  
  divBotoes.appendChild(playButton);
  divBotoes.appendChild(configButton);
  divBotoes.appendChild(aboutButton);
  
  divMenuInicial.appendChild(title);
  divMenuInicial.appendChild(divBotoes);
  divPrincipalMenuDefault.appendChild(divMenuInicial);
  divPrincipalMenuDefault.appendChild(variaveis.div_personagem);

document.body.insertBefore(divPrincipalMenuDefault, document.body.firstChild);
  
  
export function removerMenuInicial() {
  document.body.insertBefore(variaveis.div_personagem, document.body.firstChild)
  document.body.removeChild(divPrincipalMenuDefault);
}