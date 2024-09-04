import {Pedido} from './Pedido';
import {Cliente} from './Cliente';

const clienteExemplo = new Cliente('Ronaldo', 'ronaldo@gmail.com');
const pedidoExemplo = new Pedido (clienteExemplo, 'Arroz', 10);

console.log(pedidoExemplo.exibirPedido());