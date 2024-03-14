
let ListadeNumerosSorteados = []
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;
let numeroLimite = 10;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}


function gerarNumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadedeElementosNalista = ListadeNumerosSorteados.length

    if (quantidadedeElementosNalista == 10) {
        numeroEscolhido
    }

    if (ListadeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroaleatorio()
    } else {
        ListadeNumerosSorteados.push(numeroEscolhido)
        console.log(numeroEscolhido);
    }
}
function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}
function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++

    }
}
function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroaleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


exibirMensagemIncial()

// function IMC(altura, peso) {
//     return peso / (altura * altura);
// }
// console.log(IMC(1.7 , 65))
//


//Exercicio 2
//let nome = prompt("Qual é o seu nome? ");
//console.log("Ola Mundo");
//function parametro(nome) {
//    console.log(`Ola ${nome}`);
//
//}
// parametro(nome);

// Return
//function dobro(numero) {
//    return numero * 2;
//
//
//}
//let numero = dobro(2)
//console.log(dobro(7))
//

//function parametro(pt1, pt2, pt3) {
//    return (pt1 + pt2 + pt3) / 3;
//}
//console.log(parametro(8, 9, 5));
//
//Maior deles
//
//function Mnumero(maior, menor) {
//    if ( maior > menor) {
//        return maior
//    } else
//        return menor
//    }
//    console.log(Mnumero(16, 8));
//
//
// Multiplicação
//function Multiplicação(nmr1) {
//    return (nmr1 * nmr1);
//}
//
//console.log(Multiplicação(6))

//function maior2(n1, n2) {
//    return Math.max([n1, n2]);
//}
//
//console.log(maior2(1, 1))

//function fatorial(parametro) {
//    let contador = 1
//    let resultado = 1
//    while (contador <= parametro) {
//        resultado += resultado * contador
//        contador++;
//    }
//    return resultado
//
//}
//console.log(fatorial(10))
//
//function cambio(dolar) {
//    return dolar * 4.80
//}
//console.log(cambio(4))
//
//function sala(altura, largura) {
//    let perimetro = (altura * 2) + (largura * 2)
//    let area = altura * largura
//    console.log(perimetro, area)
//    return perimetro, area
//}
//console.log(sala(5.3, 6.7))
//
//function circulo(raio,) {
//    let perimetro = 2 * 3.14 * raio
//    console.log(perimetro)
//}
//
//circulo(8)
//
//// Exercicio 6
//
//function tabuada(numero) {
//    let contador = 1
//    while (contador <= 10){
//
//        console.log(`${numero} * ${contador} = ${contador * numero}`)
//        contador++;
//    }
//}
//tabuada(5)

//Lista

//let ListaGenerica = []
//let LinguagensDeprogramação = ['JavaScript', 'C', 'C++', 'Kotlin', 'Pyton', 'Java', 'Ruby', 'GoLang']
//let nomes = ['Lucas', 'Samuel', 'Arthur']
//console.log(LinguagensDeprogramação[0], LinguagensDeprogramação[1], LinguagensDeprogramação[2])
//console.log()
//console.log(nomes[0],nomes[1],nomes[2])