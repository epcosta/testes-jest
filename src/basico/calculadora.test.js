import somar from "./calculadora.js";

describe("Operações matematicas", () => {
  test("Deve somar dois numeros", () => {
    const resultado = somar(2, 3);
    expect(resultado).toBe(5);
  });
});
