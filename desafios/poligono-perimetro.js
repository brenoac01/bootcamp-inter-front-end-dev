let lines = gets().split("\n");
let line = lines.shift().split(' ');

let lados = parseInt(line[0]);
let comprimento = parseInt(line[1]);

let perimetro = lados*comprimento;

print(perimetro);