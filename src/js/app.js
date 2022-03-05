import { adicionarJogadaPlayer, adicionarJogo, alterarPlacar, partida, resultadoRodada } from "./functions/base.js";

function jogo(simboloClick) {
    const player = document.getElementById('jogada-player');
    const maquina = document.getElementById('jogada-maquina');

    simboloClick.addEventListener('click', () => {
        player.innerHTML = ''
        maquina.innerHTML = ''

        partida()
        adicionarJogo(player, adicionarJogadaPlayer(simboloClick))
        const valor_jokempo_player = adicionarJogadaPlayer(simboloClick)[1]
        setTimeout(() => {
            const status_vencedor = resultadoRodada(valor_jokempo_player)
            alterarPlacar(status_vencedor)
        }, 1500)
    })


}

function jogarNovamente() {
    const container = document.getElementById('container');

    const secao_jogada = document.getElementById('secaoJogada');
    const secao_rodada = document.getElementById('secaoRodada');
    const secao_resultado = document.getElementById('secaoResultado');

    container.innerHTML = ''
    
    secao_jogada.classList.remove('remove');
    secao_jogada.classList.add('secaoJogada');

    secao_resultado.classList.remove('secaoResultado');
    secao_resultado.classList.add('remove');

    container.appendChild(secao_jogada);
    container.appendChild(secao_rodada);
    container.appendChild(secao_resultado);

    jogo()
}

export { jogo, jogarNovamente }