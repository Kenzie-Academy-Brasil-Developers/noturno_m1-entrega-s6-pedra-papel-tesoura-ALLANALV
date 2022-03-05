import { Maquina } from "../models/jogo_maquina.js";

const input_name = document.getElementById('nome-jogador');

function mostrarSecaoJogada() {
    const form = document.querySelector('form');
    const placar = document.querySelector('.remove');
    const jogada = document.getElementById('secaoJogada')

    if (isNaN(input_name.value)) {
        form.classList.add('remove');

        placar.classList.remove('remove');
        placar.classList.add('secaoPlacar');

        jogada.classList.toggle('secaoJogada')
    }

    return jogada
}

function mostrarSecaoRodada() {
    const secao_jogada = document.getElementById('secaoJogada')
    secao_jogada.classList.remove('secaoJogada');
    secao_jogada.classList.add('remove');

    const secao_rodada = document.getElementById('secaoRodada');
    secao_rodada.classList.remove('remove');
    secao_rodada.classList.add('secaoRodada');
}
function partida() {
    mostrarSecaoRodada();

    const maquina = document.getElementById('jogada-maquina');
    const jogo_maquina = new Maquina()

    adicionarJogo(maquina, jogo_maquina.jokempo());

    return jogo_maquina.jokempo()
}

function adicionarJogo(parent, nodes) {
    nodes.forEach((elem) => {
        parent.appendChild(elem)
    })
}

function adicionarJogadaPlayer(elemento) {
    const image = document.createElement('img');
    const fig = document.createElement('figcaption');

    image.src = elemento.children[0].src
    fig.innerText = elemento.children[1].textContent

    return [image, fig]
}

function mostrarSecaoResultado() {
    const secao_rodada = document.getElementById('secaoRodada');
    const secao_resultado = document.getElementById('secaoResultado');

    secao_rodada.classList.remove('secaoRodada');
    secao_rodada.classList.add('remove');

    secao_resultado.classList.remove('remove');
    secao_resultado.classList.add('secaoResultado');
}

function resultadoRodada(jogadaPlayer) {
    mostrarSecaoResultado();

    const maquina = document.getElementById('jokempo-maquina');
    const valor_jogada_maquina = maquina.textContent

    const resultado = document.querySelector('.resultadoRodada');

    //Condicionais para ver quem ganhou a rodada!
    if (valor_jogada_maquina === 'PEDRA' && jogadaPlayer.textContent.toUpperCase() === 'TESOURA') {
        resultado.innerText = 'VOCÊ PERDEU!'
    } else if (valor_jogada_maquina === 'TESOURA' && jogadaPlayer.textContent.toUpperCase() === 'PAPEL') {
        resultado.innerText = 'VOCÊ PERDEU!'
    } else if (valor_jogada_maquina === 'PAPEL' && jogadaPlayer.textContent.toUpperCase() === 'PEDRA') {
        resultado.innerText = 'VOCÊ PERDEU!'
    } else if (valor_jogada_maquina === 'PEDRA' && jogadaPlayer.textContent.toUpperCase() === 'PAPEL') {
        resultado.innerText = 'PARABÉNS VOCÊ GANHOU!'
    } else if (valor_jogada_maquina === 'TESOURA' && jogadaPlayer.textContent.toUpperCase() === 'PEDRA') {
        resultado.innerText = 'PARABÉNS VOCÊ GANHOU!'
    } else if (valor_jogada_maquina === 'PAPEL' && jogadaPlayer.textContent.toUpperCase() === 'TESOURA') {
        resultado.innerText = 'PARABÉNS VOCÊ GANHOU!'
    } else {
        resultado.innerText = 'TEMOS UM EMPATE'
    }

    return resultado
}

function alterarPlacar(status) {
    const placar_player = document.getElementById('jogador');
    const placar_maquina = document.getElementById('maquina');

    let valor_placar_jogador = Number(placar_player.textContent)
    let valor_placar_maquina = Number(placar_maquina.textContent)

    if (status.textContent === 'VOCÊ PERDEU!') {
        valor_placar_maquina += 1
        placar_maquina.innerText = valor_placar_maquina
    } else if (status.textContent === 'PARABÉNS VOCÊ GANHOU!') {
        valor_placar_jogador += 1
        placar_player.innerText = valor_placar_jogador
    }
}


export { mostrarSecaoJogada, partida, adicionarJogo, adicionarJogadaPlayer, resultadoRodada, alterarPlacar }