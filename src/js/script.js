import { prepararJogo } from "./base.js";

const input_name = document.getElementById('nome-jogador');
const submit = document.getElementById('button-submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();

    prepararJogo()

    input_name.value = ''
});