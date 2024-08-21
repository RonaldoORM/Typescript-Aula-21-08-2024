"use strict";
const pessoaEmpregado = {
    nome: 'Ronaldo',
    idade: 20,
    empresa: 'Movida',
    salario: 1000
};
function obterMensagem1(pessoaEmpregado) {
    return `O  ${pessoaEmpregado.nome} de ${pessoaEmpregado.idade} anos, recebe R$${pessoaEmpregado.salario.toFixed(2)} pela empresa ${pessoaEmpregado.empresa}.`;
}
console.log(obterMensagem1(pessoaEmpregado));
