function verificarMaiorElemento<T extends number | string>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");        
    }

    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; } }
    return maior;
}

const numeroMaior = verificarMaiorElemento([30, 60, 70]);
console.log(numeroMaior);
const elementoMaior = verificarMaiorElemento(['gato', 'elefante', 'zebra']);
console.log(elementoMaior);

