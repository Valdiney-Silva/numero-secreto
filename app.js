let listaNumerosGerados = [];
let quantidadeNumeros = prompt("Digite o número limite de números a serem sorteados.");
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });

}

function textoInicial() {
    while (quantidadeNumeros == "") {
        quantidadeNumeros = prompt("Digite o número limite de números a serem sorteados.");
    }
        exibirTextoNaTela("h1", "Bem vindo ao jogo do número secreto!");
        exibirTextoNaTela("p", `Escolha um número entre 1 e ${quantidadeNumeros}`);
        console.log(numeroSecreto);
}

textoInicial();

let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mensagemTentativas);
        habilitarBotao();
        console.log(`tentativa de número: ${tentativas}`);

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", "Você errou...");
            exibirTextoNaTela("p", "O número digitado é maior que o número secreto. Digite um número menor!");
            limparCampo();
          //  console.log(`tentativa de número: ${tentativas}`);
        } else {
            exibirTextoNaTela("h1", "Você errou...");
            exibirTextoNaTela("p", "O número digitado é menor que o número secreto. Digite um número maior!");
            limparCampo();
           // console.log(`tentativa de número: ${tentativas}`);
        }
        tentativas++;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * quantidadeNumeros + 1);

    if (quantidadeNumeros == listaNumerosGerados.length) {
        listaNumerosGerados = [];
    }

    if (listaNumerosGerados.includes(numeroGerado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosGerados.push(numeroGerado);
        console.log(listaNumerosGerados);
        return numeroGerado;
    }
}

function habilitarBotao() {
    let botaoNovoJogo = document.getElementById("reiniciar").removeAttribute("disabled");
}
