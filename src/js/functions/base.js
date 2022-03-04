import { jogada_maquina } from "../jogo_maquina.js";

const input_name = document.getElementById('nome-jogador');

function prepararPartida() {
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

function partida() {
    const secao_jogada = document.querySelector('.secaoJogada')
    secao_jogada.classList.remove('secaoJogada');
    secao_jogada.classList.add('remove');

    const secao_rodada = document.querySelector('.remove-secaoRodada');
    secao_rodada.classList.remove('remove-secaoRodada');
    secao_rodada.classList.add('secaoRodada');

    const maquina = document.getElementById('jogada-maquina');

    adicionarJogo(maquina, jogada_maquina);
}

function adicionarJogo(parent, nodes) {
    nodes.forEach((elem) => {
        parent.appendChild(elem)
    })
}


export { prepararPartida, partida }