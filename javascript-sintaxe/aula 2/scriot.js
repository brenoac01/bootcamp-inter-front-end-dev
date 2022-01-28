// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 2;
console.log(typeof(numeroQualquer));

//string
var nome = 'breno';
console.log(typeof(nome));

// como declarar
var variável;
console.log(variável); //undefined

let variavel2 = 'bruno';
variavel2 = 'pedro';
console.log(variavel2);

// const constante; erro, requer inicialização

// variaveis globais vs locais

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal () {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// comparação
var comparacao = '0' == 0;
console.log(comparacao); //true

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica); //false

//divisão inteira
var divisaoInteria = 5 % 2;
console.log(divisaoInteria);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

var maiorOuIgual = 5 >= 3;
console.log(maiorOuIgual);

/* operadores lógicos
    && equivale a 'e'
    || equivale ao 'ou'
    ! equivale ao '~'
*/

