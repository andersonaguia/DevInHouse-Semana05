export class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;
  
    constructor(nome, preco, emEstoque, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.emEstoque = emEstoque;
      this.quantidade = quantidade;
    }
}

export class Pedido {
  constructor(numPedido, nomeCliente) {
    this.numeroPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
  }

  adicionarProduto(produto) {
    const ehProduto = produto instanceof Produto;
    if (ehProduto) {
      this.listaProdutos.push(produto);
    }
  }

  calcularTotal() {
    let total = 0;
    this.listaProdutos.forEach((produto) => {
      total = total + produto.preco * produto.quantidade;
    });
    return total;
  }
}

