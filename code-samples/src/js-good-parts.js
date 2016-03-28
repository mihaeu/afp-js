'use strict';

let identity = (x) => x;
let add = (x, y) => x + y;
let mul = (x, y) => x * y;
let identityf = (x) => () => x;
let addf = (x) => (y) => x + y;
let applyf = (fn) => (x) => (y) => fn(x, y);
let curry2 = (fn, x) => applyf(fn)(x);
let curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return curry.bind(this, fn, ...args);
};
// let inc = applyf(add)(1);
let inc = addf(1);
// let inc = curry(add, 1);

// let methodize = fn => x => fn(this, x);
let methodize = fn => (...x) => fn(this, ...x);
Number.prototype.add = methodize(add);

console.log((3).add(4));
console.log(inc(5));
console.log(inc(inc(5)));
console.log(curry(mul)(3)(4));
console.log(curry2(mul, 3)(4));
console.log(addf(3)(9));
console.log(applyf(add)(3)(9));