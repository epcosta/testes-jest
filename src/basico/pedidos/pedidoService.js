import axios from "axios";
export const pedidoService = {
  aplicarDesconto: (valor) => {
    return valor - 10;
  },
  gerarNota: (valor) => {
    console.log("Nota fiscal gerada com valor: ", valor);
  },
  fecharPedido: (valorTotal) => {
    const valorFinal = pedidoService.aplicarDesconto(valorTotal);
    pedidoService.gerarNota(valorFinal);
    return valorFinal;
  },
  verEndereco: () => {
    return axios.get("https://viacep.com.br/ws/01001000/json/");
  },
};
