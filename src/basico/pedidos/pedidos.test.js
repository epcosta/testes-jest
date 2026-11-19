import {
  buscarPedido,
  calcularFrete,
  gerarCodigoRastreio,
  adicionarAoCarrinho,
  consultaPrecoProduto,
  aplicarDesconto,
} from "./pedidos";

describe("Testes de pedidos", () => {
  test("Buscar pedido existente", () => {
    const pedido = buscarPedido(2);
    //expect(pedido.id).toBe(2);
    expect(pedido).toBeTruthy();
  });
});

describe("Calculo de frete", () => {
  test("O valor do frete deve ser positivo", () => {
    const valor = calcularFrete(10);
    expect(valor).toBeGreaterThan(0);
  });
});

describe("Rastreio de Frete", () => {
  test("Deve validar o formato do código de rastreio", () => {
    const codigo = gerarCodigoRastreio(10);
    expect(codigo).toBe("BR-ORDER-10-xfg");
    expect(codigo).toMatch(/^BR-ORDER-\d+-xfg$/);
  });
});

describe("Gestão de carrinho", () => {
  test("Incluir novo item no carrinho", () => {
    const carrinho = [{ produto: "Mouse", quantidade: 2 }];
    const item = { produto: "Teclado", quantidade: 4 };

    const novoCarrinho = adicionarAoCarrinho(carrinho, item);
    const acumulado = novoCarrinho;
    expect(novoCarrinho).toContainEqual({
      produto: "Teclado",
      quantidade: 4,
    });
    expect(novoCarrinho).toHaveLength(2);
  });

  test("Deve executar um erro ao adicionar item com quantidade inválida", () => {
    const carrinho = [{ produto: "Mouse", quantidade: 2 }];
    const item = { produto: "Teclado", quantidade: 0 };

    expect(() => {
      adicionarAoCarrinho(carrinho, item);
    }).toThrow("Quantidade inválida");
  });
});

describe("Consulta de preços", () => {
  test("Deve retornar o preço do produto", () => {
    return consultaPrecoProduto(1).then((preco) => {
      console.log("Preço do produto: ", preco);
      expect(preco).toBe(100);
    });
  });

  test("Deve fazer a acertiva com resolves", () => {
    return expect(consultaPrecoProduto(1)).resolves.toBe(100);
  });
  test("Deve fazer com async/await", async () => {
    const valor = await consultaPrecoProduto(1);
    expect(valor).toBe(100);
  });
});

describe("Cálculo do desconto", () => {
  beforeAll(() => {
    console.log(
      "Iniciando os testes de desconto ######################################",
    );
  });
  const mock = jest.fn();
  test("Deve retornar o default se não souber o que fazer", () => {
    const resultado = aplicarDesconto(100, mock);
    expect(resultado).toBeNaN();
  });

  test("Deve calcular a aliquota baseado no valor", () => {
    mock.mockReturnValue(0.5);
    const resultado = aplicarDesconto(100, mock);
    expect(resultado).toBe(45);
  });

  test("Deve validar as iterações com o mock", () => {
    //expect(mock).toHaveBeenCalled();
    //expect(mock).toHaveBeenCalledTimes(1);
    //expect(mock).toHaveBeenCalledWith(90);
  });

  test("Deve permitir aplicar uma lógica no mock", () => {
    const novoMock = jest.fn().mockImplementation((valor) => valor / 100);
    const resultado = aplicarDesconto(100, novoMock);
    expect(resultado).toBe(81);
  });
});
