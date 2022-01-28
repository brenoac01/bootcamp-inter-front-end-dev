// oq são arrays

// como declarar um array
/*
let array = ['string', 1, true];
console.log(array); */

//pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];
console.log(array[3]);

/* Manipulando Arrays
forEach() - itera um array;
push() - add item no final do array;
pop() - remove item no final do array;
shift() - remove item no início do array;
unshift() - add item no inicio do array;
indexOf() - retonar o índice de uma valor
splice() - remove ou substitui itens pelo índice;
slice() - retorna uma parte de uma array existente; */

//forEach
array.forEach(function(item, index){console.log(item, index)});

//push()
array.push('novo item');
console.log(array);

//pop()
array.pop();
console.log(array);

//shift()
array.shift();
console.log(array);

//unshift ()
array.unshift('novo mais q novo item');
console.log(array);

//indexOf()
console.log(array.indexOf(true));

//splice()
array.splice(0, 3);
console.log(array);

//slice()
let novoArray = array.slice(0, 3);
console.log(novoArray);

//Object
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);

