alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
console.log('Valor do chute:', chute);
let tentativas = 1;

//enquanto chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt("Escolhe um número entre 1 e 100: ");
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// if (tentativas > 1) {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }
