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
    adicionarJogoMaquina(maquina, jogada_maquina);

}

function adicionarJogoMaquina(parent, nodes) {
    nodes.forEach((elem) => {
        parent.appendChild(elem)
    })
}

function resultadoRodada(jogadaPlayer) {
    const maquina = document.getElementById('jokempo-maquina');
    const valor_jogada_maquina = maquina.textContent

    const p = document.querySelector('.resultadoRodada');

    //Condicionais para ver quem ganhou a rodada!
    if (valor_jogada_maquina === 'PEDRA' && jogadaPlayer.textContent.toUpperCase() === 'TESOURA') {
        p.innerText = 'VOCê PERDEU!'
        alterarPlacar(p)
    } else if (valor_jogada_maquina === 'TESOURA' && jogadaPlayer.textContent.toUpperCase() === 'PAPEL') {
        p.innerText = 'VOCê PERDEU!'
        alterarPlacar(p)
    } else if (valor_jogada_maquina === 'PAPEL' && jogadaPlayer.textContent.toUpperCase() === 'PEDRA') {
        p.innerText = 'VOCê PERDEU!'
        alterarPlacar(p)
    } else if (valor_jogada_maquina === 'PEDRA' && jogadaPlayer.textContent.toUpperCase() === 'PAPEL') {
        p.innerText = 'PARABÉNS VOCÊ GANHOU'
        alterarPlacar(p)
    } else if (valor_jogada_maquina === 'TESOURA' && jogadaPlayer.textContent.toUpperCase() === 'PEDRA') {
        p.innerText = 'PARABÉNS VOCÊ GANHOU'
        alterarPlacar(p)
    } else if (valor_jogada_maquina === 'PAPEL' && jogadaPlayer.textContent.toUpperCase() === 'TESOURA') {
        p.innerText = 'PARABÉNS VOCÊ GANHOU'
        alterarPlacar(p)
    } else {
        p.innerText = 'TEMOS UM EMPATE'
    }
}

function alterarPlacar(status) {
    const placar_player = document.getElementById('jogador');
    const placar_maquina = document.getElementById('maquina');

    let valor_placar_jogador = Number(placar_player.textContent)
    let valor_placar_maquina = Number(placar_maquina.textContent)

    if (status.textContent === 'VOCê PERDEU!') {
        valor_placar_maquina++
        placar_maquina.innerText = valor_placar_maquina
    } else if (status.textContent === 'PARABÉNS VOCÊ GANHOU') {
        valor_placar_jogador++
        placar_player.innerText = valor_placar_jogador
    }
}


export { prepararPartida, partida, resultadoRodada }