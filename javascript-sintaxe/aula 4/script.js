var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 !=-1 ? console.log('Os jogadores são válidos!') : console.log ('Jogadores Inválidos');
if(jogador1 > 0 && jogador2 ==0) {
    console.log('O jogador 1 marcou ponto!');   
    placar = jogador1 > jogador2;
}
if (jogador2 >0 && jogador1 ==0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}
if (jogador1 == 0 && jogador2 == 0){
    console.log('Ninguém marcou ponto!')
}


switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou');

}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

for (i=0; i < array.length; i++) {
    console.log(i);
}

// for/of

for (i of array) {
    console.log(i);
}

// com object - problemático
for (i of object.propriedade1) {
    console.log(i);
}

// while

var a = 0;

while (a < 11) {
    console.log(a);
    a++;
}

do {
    console.log(a);
    a++;
} while(a < 21)