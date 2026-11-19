describe("Matcher de comparação", () => {
  test("toBe", () => {
    expect(2 + 3).toBe(5);
    const nome1 = { nome: "Euripides", idade: 30 };
    const nome2 = { nome: "Euripides", idade: 30 };
    expect(nome1).toStrictEqual(nome2);
  });
});
