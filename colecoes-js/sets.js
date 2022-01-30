const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet]; //spread tranforma o set em array
}

console.log(valoresUnicos(meuArray));