"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = require("./Pedido");
const Cliente_1 = require("./Cliente");
const clienteExemplo = new Cliente_1.Cliente('Ronaldo', 'ronaldo@gmail.com');
const pedidoExemplo = new Pedido_1.Pedido(clienteExemplo, 'Arroz', 10);
console.log(pedidoExemplo.exibirPedido());
