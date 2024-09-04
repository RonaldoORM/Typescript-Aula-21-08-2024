"use strict";
function encontrarMaior(elementos) {
    if (elementos.length === 0) {
        throw new Error("A lista não pode estar vazia.");
    }
    let maiorElemento = elementos[0];
    for (let i = 1; i < elementos.length; i++) {
        if (elementos[i] > maiorElemento) {
            maiorElemento = elementos[i];
        }
    }
    return maiorElemento;
}
const maiorNumero = encontrarMaior([10, 20, 30]);
const maiorPalavra = encontrarMaior(['gato', 'elefante', 'zebra']);
console.log(maiorNumero);
console.log(maiorPalavra);
