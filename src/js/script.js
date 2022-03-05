import { jogo, jogarNovamente } from "./app.js";
import { mostrarSecaoJogada } from "./functions/base.js";

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