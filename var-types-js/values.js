// uso da let - cuidados
let numberOne;

numberOne = 1;

console.log(numberOne + 2);

var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    lastName = 'Silva';
    console.log(firstName, lastName);
}

// constantes - Declarar snake uppercase
const FIRST_NAME = "Breno";

//FIRST_NAME = 'Caio'; //erro

console.log(FIRST_NAME);