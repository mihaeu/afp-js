describe("Type inference", () => {
  it("is confusing", () => {
    expect(require("../src/language-basics").typeInference())
      .toEqual([true, true, false, false, true, true])
  });
});