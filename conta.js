//Modificar
let inicial = 6;

let num = 64;//Maximo

let array = [];
for (let i = 1; i <= num; i++) {
  array.push(i);
}

document.write("<h1>Serie Numerica </h1>");
document.write(`<h1>Serie 1 - ${num}</h1>`);
document.write("<h2>Numero Inicial </h2>");

document.write(array[inicial -1]);

document.write("<br>");
document.write("<h2>Numero Contrario </h2>");

document.write(array[array.length - inicial]);