export var divOnFocus = document.createElement("div");
var textOnFocus = document.createElement("p");

export function createFocus() {
    divOnFocus.id = 'onfocus';
    textOnFocus.textContent = 'Clique na tela para jogar.';
    divOnFocus.appendChild(textOnFocus);
    var firstChild = document.body.firstChild;
    if (firstChild) {
        document.body.insertBefore(divOnFocus, firstChild);
    } else {
        document.body.appendChild(divOnFocus);
    }
}

export function deleteFocus() {
    document.body.removeChild(divOnFocus);
}
