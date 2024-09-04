"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Financeiro_1 = require("./Financeiro");
const orcamentoExemplo = new Financeiro_1.Financeiro.Orcamento(2450, ['Antena', 'Cabos']);
console.log(orcamentoExemplo.exibirOrcamento());
const valorComImposto = Financeiro_1.Financeiro.calcularImposto(2450, 0.30);
console.log(`Valor com imposto: R$${valorComImposto.toFixed(2)}`);
const valorcomDesconto = Financeiro_1.Financeiro.calcularDesconto(2450, 0.10);
console.log(`Valor com desconto: R$${valorcomDesconto.toFixed(2)}`);
