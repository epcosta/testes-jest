import { describe, expect, jest, test } from "@jest/globals";
import { pedidoService } from "./pedidoService";
import axios from "axios";

jest.mock("axios");

describe("Fechamento de pedido", () => {
  test("Deve fechar o pedido corretamente", () => {
    const espiao = jest.spyOn(pedidoService, "aplicarDesconto");

    const valor = pedidoService.fecharPedido(100);
    //expect(valor).toThrow("Erro ao gerar nota fiscal");
  });
  test("Deve retornar o endereço", async () => {
    const respostaEndereco = { data: { endereco: "Rua Exemplo, 123" } };
    axios.get.mockResolvedValue(respostaEndereco);
    const dados = await pedidoService.verEndereco();
    console.log("Dados do endereço: ", dados.data);
  });
});
