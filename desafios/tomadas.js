let lines = gets().split("\n");


let line = lines.shift().split(' ');

let t1 = parseInt(line[0]);
let t2 = parseInt(line[1]);
let t3 = parseInt(line[2]);
let t4 = parseInt(line[3]);

print(t1+t2+t3+t4-3);