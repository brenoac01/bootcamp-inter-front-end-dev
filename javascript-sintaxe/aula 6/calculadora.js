//Minhas Calculadora

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (x) \n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (^)'));
    
    let n1 = Number(prompt ('Insira o primeiro valor:'));
    let n2 = Number(prompt ('Insira o segundo valor:'));
    let resultado;

    function novaoperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais!')
        } else {
            alert('Digite uma opção válida!')
            novaoperacao();
        }
        
    }

    switch(operacao) {
        case 1 :
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaoperacao();
            break;
        case 2 :
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaoperacao();
            break;
        case 3 :
            resultado = n1 * n2;
            alert(`${n1} x ${n2} = ${resultado}`);
            novaoperacao();
            break;
        case 4 :
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaoperacao();
            break;
        case 5 :
            resultado = n1 % n2;
            prompt(`${n1} % ${n2} = ${resultado}`);
            novaoperacao();
            break;
        case 6 :
            resultado = n1 ** n2;
            alert(`${n1} ^ ${n2} = ${resultado}`);
            novaoperacao();
            break;
        default:
    }
}

calculadora();