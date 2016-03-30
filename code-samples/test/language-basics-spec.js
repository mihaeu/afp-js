describe("Language basics", () => {
  var funcs = require('../src/language-basics');

  it("counts sheep", () => expect(funcs.countSheep()).toEqual("5 Schafe\n4 Schafe\n3 Schafe\n2 Schafe\n1 Schaf\nZzzz ..."));
  it("is functionally scoped", () => expect(funcs.functionalScoping()[0]).toBeUndefined());
  it("is functionally scoped", () => expect(funcs.functionalScoping()[1]).toNotBe(3));
});