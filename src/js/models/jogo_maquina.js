class Maquina {
    constructor() {
        this.jogadaAleatoria = function () {
            let jogar = Math.floor(Math.random() * 3)
            return jogar
        }
        this.jokempo = function () {
            const image = document.createElement('img');
            const figcaption = document.createElement('figcaption');

            figcaption.setAttribute('id', 'jokempo-maquina')

            let resultado = this.jogadaAleatoria();

            if (resultado === 0) {
                image.src = './src/img/pedra.png'
                image.alt = 'pedra'

                figcaption.innerText = 'PEDRA'
            }
            if (resultado === 1) {
                image.src = './src/img/papel.png'
                image.alt = 'papel'

                figcaption.innerText = 'PAPEL'
            }
            if (resultado === 2) {
                image.src = './src/img/tesoura.png'
                image.alt = 'tesoura'

                figcaption.innerText = 'TESOURA'
            }

            return [image, figcaption]
        }
    }

}

export { Maquina }
