"use strict";
function obterMensagem(produto, pagamento) {
    return `O produto ${produto.nome}, da categoria ${produto.categoria}, custa R$${produto.preco.toFixed(2)} e será pago com ${pagamento}.`;
}
const produto = {
    nome: 'Arroz',
    preco: 8,
    categoria: 'Alimento'
};
const formaPagamento = 'cartão';
console.log(obterMensagem(produto, formaPagamento));
