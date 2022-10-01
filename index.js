import {saudacao} from './saudacao.js';


import {Pedido, Produto} from './database.js';

const prod1 = new Produto("Fusca preto", 40_000, true, 1);
const prod2 = new Produto("Kombi ciano", 10_000, false, 0);
const prod3 = new Produto("Chevette verde", 6_500, true, 2);
const prod4 = new Produto("Opala grafite", 20_000, true, 1);
const prod5 = new Produto("Maverick vermelho", 35_000, true, 5);

const pedidoAnderson = new Pedido(2022001, "Anderson");
const pedidoFulano = new Pedido(20220002, "Fulano");

pedidoAnderson.adicionarProduto(prod1);
pedidoAnderson.adicionarProduto(prod2);
pedidoAnderson.adicionarProduto(prod3);
pedidoFulano.adicionarProduto(prod4);
pedidoFulano.adicionarProduto(prod5);