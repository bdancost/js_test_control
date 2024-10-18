const meuPedido = {
  itens: [
    { nome: "Pocão de vida", valor: 100 },
    { nome: "Espada de prata", valor: 200 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};

const calcularValorPedido = (pedido) => {
  const valorTotal = pedido.itens
    .filter((item) => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

  const entrega = pedido.itens.filter((item) => item.entrega);

  if (valorProdutos > 500) {
    return valorProdutos;
  } else {
    return valorProdutos + entrega[0].valor;
  }
};
