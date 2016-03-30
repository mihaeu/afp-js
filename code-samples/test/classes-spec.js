describe("Classes", () => {
  it("ES5 inheritance", () => expect(require('../src/classes').es5()).toEqual("Platypus moves 3m.Snake wiggles 3m."));
  it("ES6 inheritance", () => expect(require('../src/classes').es6()).toEqual("Platypus moves 3m.Snake wiggles 3m."));
});