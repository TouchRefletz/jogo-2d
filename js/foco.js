export function naoEmFoco() {
    body.style.opacity = '0.5';
    emfoco.style.display = 'flex';
    personagem.style.opacity = '0.5';
}

export function emFoco() {
    body.style.opacity = '';
    emfoco.style.display = '';
    personagem.style.opacity = '';
}
