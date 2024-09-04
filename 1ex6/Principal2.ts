import { Financeiro } from './Financeiro';

const orcamentoExemplo = new Financeiro.Orcamento(2450, ['Antena', 'Cabos'] );
console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(2450, 0.30);
console.log(`Valor com imposto: R$${valorComImposto.toFixed(2)}`)

const valorcomDesconto = Financeiro.calcularDesconto(2450, 0.10);
console.log(`Valor com desconto: R$${valorcomDesconto.toFixed(2)}`);
