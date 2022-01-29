// Função Anônima

const soma = function (a,b) {
    return a + b;
}

console.log(soma(1,2));

// Função autoinvocável IIFE (Immediately Invoked Function Expression)
(
    function () {
        let name = "Digital Innovation One"
        return name;
    }
) ();

const soma3 = (
    function (a,b) {
        return a + b;
    }
) (3,-9);

console.log(soma3);

// Callbacks - uma função passada como argumento para outra função

const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma4 = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma4, 2, 5);
const reusltSub = calc(sub, 2, 5);

console.log(resultSoma);
console.log(reusltSub);

// Técnicas úteis

// Spread: separar os parâmetros

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

// Rest: combina os argumentos em um array - oq era um elemento independente se torna parte deu array

function confereTamanho (...args) {
    console.log(args.length)
}

confereTamanho();
confereTamanho(1,2);
confereTamanho(3, 4, 5, 5);

// Object Destrucuring - entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 43,
    displayName: 'Joe',
    fullName: {
        firstName: John,
        lastName: hart
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
}

userId(user)

getFullName(user)

//This - referência de contexto (objeto) - call/apply/bind