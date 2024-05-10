var divPrincipalCarregamento = document.createElement("div");
divPrincipalCarregamento.classList.add("carregamento");

var divTelaCarregamento = document.createElement("div");
divTelaCarregamento.classList.add("tela-carregamento");

divPrincipalCarregamento.appendChild(divTelaCarregamento);

var divBarraProgresso = document.createElement("div");
divBarraProgresso.classList.add("barra-progresso");

var divProgresso = document.createElement("div");
divProgresso.classList.add("progresso");

divBarraProgresso.appendChild(divProgresso);

var divPorcentagem = document.createElement("div");
divPorcentagem.classList.add("porcentagem");
divPorcentagem.innerHTML = '0%';

divTelaCarregamento.appendChild(divBarraProgresso);
divTelaCarregamento.appendChild(divPorcentagem);
var firstChild = document.body.firstChild;
document.body.insertBefore(divPrincipalCarregamento, firstChild);