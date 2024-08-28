type Pessoa = {
    nome: string;
    idade: number;
}

type Empregado = {
    empresa: string;
    salario: number;
}

type PessoaEmpregado = Pessoa & Empregado;

const pessoaEmpregado: PessoaEmpregado = {
    nome: 'Ronaldo',
    idade: 20,
    empresa: 'Movida',
    salario: 1000
};

function obterMensagem1(pessoaEmpregado: PessoaEmpregado): string {
    return `O  ${pessoaEmpregado.nome} de ${pessoaEmpregado.idade} anos, recebe R$${pessoaEmpregado.salario.toFixed(2)} pela empresa ${pessoaEmpregado.empresa}.`;
}

console.log(obterMensagem1(pessoaEmpregado));