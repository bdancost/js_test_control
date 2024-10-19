const calcularValorPedido = require("./calcular-valor-pedido");

it("não deve cobrar valor de frete quando o valor dos produtos for superior a 500", () => {
  // AAA - 3 passos de criação de um teste

  // Arrange - Arrumar
  const meuPedido = {
    itens: [
      { nome: "Arco encantado", valor: 2000 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  // Act - Ação - O que vai ser testado
  const resultado = calcularValorPedido(meuPedido);

  // Assert - Afirmar - Qual o resultado esperado
  expect(resultado).toBe(2000);
});

it("Deve cobrar valor de frete quando valor dos produtos for menor que 500", () => {
  // Arrange
  const meuPedido = {
    itens: [
      { nome: "Sanduíche", valor: 50 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  // Act
  const resultado = calcularValorPedido(meuPedido);

  // Assert
  expect(resultado).toBe(150);
});

it("Deve cobrar valor de frete quando valor dos produtos seja exatamente 500", () => {
  const meuPedido = {
    itens: [
      { nome: "Sanduíche bem caro", valor: 500 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(600);
});

/* Caso os estados de entrega sejam RS ou SC, deve ser acrrescido um valor de 30% na entrega */
it("Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS", () => {
  const pedidoComEstadoRS = {
    estado: "RS",
    itens: [
      { nome: "Sanduíche bem caro", valor: 500 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoRS);

  expect(resultado).toBe(620);
});

it("Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC", () => {
  const pedidoComEstadoSC = {
    estado: "SC",
    itens: [
      { nome: "Sanduíche bem caro", valor: 500 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoSC);

  expect(resultado).toBe(620);
});

it("não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP", () => {
  const pedidoComEstadoSP = {
    estado: "SP",
    itens: [
      { nome: "Sanduíche bem caro", valor: 500 },
      { nome: "Entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(pedidoComEstadoSP);

  expect(resultado).toBe(600);
});
