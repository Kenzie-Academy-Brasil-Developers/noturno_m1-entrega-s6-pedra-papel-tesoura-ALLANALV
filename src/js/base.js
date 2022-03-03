const input_name = document.getElementById('nome-jogador');

function prepararJogo() {

    const form = document.querySelector('form');
    const placar = document.querySelector('.remove');
    const jogada = document.querySelector('.remove-secaoJogada')

    if (isNaN(input_name.value)) {
        form.classList.add('remove');

        placar.classList.remove('remove');
        jogada.classList.remove('remove-secaoJogada')

        placar.classList.add('secaoPlacar');
        jogada.classList.add('secaoJogada');
    } else {
        erroInput(form)
    }

    return jogada
}

function erroInput(parent) {
    const aviso = document.createElement('p');
    aviso.innerText = 'Campo preenchido de forma incorreta! Por favor preencha seu nome!'

    parent.appendChild(aviso)

    return aviso
}

export { prepararJogo }