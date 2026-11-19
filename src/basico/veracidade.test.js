describe("Matcher de veracidade", () => {
  test("igualdade ?", () => {
    expect(false == 0).toBe(true);
    expect("" == false).toBe(true);
    expect(null == undefined).toBe(true);
  });
});
