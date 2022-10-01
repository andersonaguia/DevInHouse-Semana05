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

function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  
  function elementProduto(produto) {
    const listItemEl = document.createElement("li");
    listItemEl.innerText = `${produto.nome} - ${
      produto.quantidade
    } - ${formatCurrency(produto.preco)}`;
  
    return listItemEl;
  }
  
  function printProds(list) {
    //
    const labelEl = document.createElement("label");
    labelEl.htmlFor = "produtos";
    labelEl.innerText = "produtos";
  
    const listEl = document.createElement("ul");
    listEl.name = "produtos";
  
    list.forEach((prod) => {
      listEl.appendChild(elementProduto(prod));
    });
  
    return [labelEl, listEl];
  }
  
  export function elementPedido(pedido) {
    const el = document.createElement("li");
    el.innerHTML = /*html*/ `
      <p>PEDIDO No. ${pedido.numeroPedido}</p>
      <p>Data: ${pedido.dataPedido}</p>
      <p>Cliente: ${pedido.nomeCliente}</p>
      <p>Total: ${formatCurrency(pedido.calcularTotal())}</p>
      <p>Está pago?: ${pedido.estaPago ? "Sim" : "Não"}</p>
    `;
  
    const [label, lista] = printProds(pedido.listaProdutos);
  
    el.appendChild(label);
    el.appendChild(lista);
    return el;
  }

const pedidos = [pedidoAnderson, pedidoFulano];
const pedidosEl = document.getElementById("pedidos");

pedidos.forEach((pedido) => {
  pedidosEl.appendChild(elementPedido(pedido));
});

console.log("Promise")

const sleep = (valor) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(valor), 3000)
  })
}

sleep("Olá mundo")
  .then((res) => {
    console.log(res)
  })

  setInterval(() => console.log(new Date().toLocaleTimeString("pt-BR")), 2000);