// Substuir pares de um array por 0's

function substituiPares(array) {

    if(!array) return "Isto não é um array!";
    if(!array.length) return "Array vazio!";

    for(let i=0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Você já é zero!!");
        } else if (array [i] % 2 === 0) {
            console.log(`Substituido ${array[i]} por 0 ...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [0, 1, 3, 4, 6, 0, 80, 33, 23];

console.log(substituiPares(arr));