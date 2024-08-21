
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}


type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';


function obterMensagem(produto: Produto, pagamento: FormaPagamento): string {
    return `O produto ${produto.nome}, da categoria ${produto.categoria}, custa R$${produto.preco.toFixed(2)} e será pago com ${pagamento}.`;
}

const produto: Produto = {
    nome: 'Arroz',
    preco: 8,
    categoria: 'Alimento'
};

const formaPagamento: FormaPagamento = 'cartão';

console.log(obterMensagem(produto, formaPagamento)); 
