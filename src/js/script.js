import { jogo, jogarNovamente } from "./app.js";
import { mostrarSecaoJogada } from "./functions/base.js";
//import { jogada_maquina } from "./functions/jogo_maquina.js";

const input_name = document.getElementById('nome-jogador');
const submit = document.getElementById('button-submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const jogador = document.getElementById('valor-input');
    mostrarSecaoJogada();
    jogador.innerText = input_name.value

    input_name.value = ''
});

const click_pedra = document.getElementById('click-pedra');
const click_papel = document.getElementById('click-papel');
const click_tesoura = document.getElementById('click-tesoura');

jogo(click_pedra);
jogo(click_papel);
jogo(click_tesoura);

const btn_jogar_novamente = document.getElementById('jogar-novamente');
btn_jogar_novamente.addEventListener('click', jogarNovamente)

//const resultado = resultadoRodada(valor_jokempo_player);

//const placar_player = document.getElementById('jogador');
//const placar_maquina = document.getElementById('maquina');
//
//console.log(placar_player, placar_maquina)
//let valor_placar_jogador = Number(placar_player.textContent)
//let valor_placar_maquina = Number(placar_maquina.textContent)
//
//if (resultado.textContent === 'VOCÊ PERDEU!') {
//    valor_placar_maquina += 1
//    placar_maquina.innerText = valor_placar_maquina
//} else if (resultado.textContent === 'PARABÉNS VOCÊ GANHOU!') {
//    valor_placar_jogador += 1
//    placar_player.innerText = valor_placar_jogador
//}