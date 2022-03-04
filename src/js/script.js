import { partida, prepararPartida, resultadoRodada } from "./functions/base.js";

const input_name = document.getElementById('nome-jogador');
const submit = document.getElementById('button-submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const jogador = document.getElementById('valor-input');

    prepararPartida();
    jogador.innerText = input_name.value

    input_name.value = ''
});

const simbolo = document.querySelectorAll('.escolha_jogada');

function jogada() {
    simbolo.forEach((jokempo) => {
        jokempo.addEventListener('click', () => {
            partida();

            setTimeout(resultadoRodada(jokempo.children[1]), 2000)
            const player = document.getElementById('jogada-player');
            player.appendChild(jokempo)
        });
    });
}
jogada()



