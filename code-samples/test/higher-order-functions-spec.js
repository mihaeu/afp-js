describe("Higher order functions", () => {
  var funcs = require('../src/higher-order-functions');

  it("iterative map produces squares", () => expect(funcs.imperativeMap()).toEqual([0, 1, 4, 9]));
  it("functional map produces squares", () => expect(funcs.functionalMap()).toEqual([0, 1, 4, 9]));
  it("imperativefilter gets even numbers", () => expect(funcs.imperativeFilter()).toEqual([0, 2, 4, 6, 8]));
  it("functional filter gets even numbers", () => expect(funcs.functionalFilter()).toEqual([0, 2, 4, 6, 8]));
  it("imperative reduce adds numbers", () => expect(funcs.imperativeReduce()).toEqual(10));
  it("functional reduce adds numbers", () => expect(funcs.functionalReduce()).toEqual(10));
});