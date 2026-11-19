const pedidosAtivos = [
  { id: 1, nome: "Violão", valor: 100 },
  { id: 2, nome: "Gaita", valor: 120 },
];

export const buscarPedido = (id) => {
  if (id <= 0) return undefined;

  const pedido = pedidosAtivos.find((p) => p.id === id);
  return pedido || null;
};

export const calcularFrete = (distancia) => {
  return distancia * 0.5;
};

export const gerarCodigoRastreio = (idpedido) => {
  return `BR-ORDER-${idpedido}-xfg`;
};

export const adicionarAoCarrinho = (itens, novoItem) => {
  if (novoItem.quantidade <= 0) {
    console.log(typeof novoItem.quantidade, " **** ", novoItem.quantidade);
    throw new Error("Quantidade inválida");
  }
  return [...itens, novoItem];
};

export const consultaPrecoProduto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produto = pedidosAtivos.find((p) => p.id === id);
      if (id == 31) console.log(id, " ########################## ", produto);
      if (produto) {
        resolve(produto.valor);
      } else {
        console.log(
          "Produto não encontrado ##########################",
          produto,
        );
        reject("Produto não encontrado");
      }
    }, 500);
  });
};

export const aplicarDesconto = (valor, obterAliquota) => {
  const novoValor = valor * 0.9;
  const aliquota = obterAliquota(novoValor);
  return novoValor * aliquota;
};
