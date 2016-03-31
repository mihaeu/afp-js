"use strict";

// let add = function(a, b) {
//   return a + b;
// }
let add = (a, b) => a + b;
let inc = (a) => a + 1;

let applyFn = (fn, x) => (y) => fn(x, y);
let inc2 = applyFn(add, 1);


let map = (fn, xs) => {
  if (!xs.length) return [];
  return [fn(xs[0])].concat(map(fn, xs.slice(1)));
};
// let map = (fn, xs) => !xs.length ? [] : [fn(xs[0])].concat(map(fn, xs.slice(1)));
let sort = xs => {
  if (xs.length === 0) return [];
  let pivot = xs[0], t = xs.slice(1);
  return sort(t.filter(x => x < pivot))
    .concat(pivot)
    .concat(sort(t.filter(x => x >= pivot)));
}


// normales add
// add mit geschachtelter version
// generisch
// curry

// let add = (a, b) => a + b;
// let map = (fn, xs) => {
//   if (xs.length === 0) return [];
//   return [fn(xs[0])].concat(map(fn, xs.slice(1)));
// }
let vector3DLength = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
let curry = (fn, ...args) => fn.length === args.length ? fn(...args) : curry.bind(this, fn, ...args);
// let map = (fn, xs) => !xs.length ? [] : [fn(xs[0])].concat(map(fn, xs.slice(1)));
// let reduce = (fn , value, xs) => !xs.length  ? value : reduce(fn, fn(value, xs[0]), xs.slice(1));
let inc3 = curry(add)(1);
let vector2DLength = curry(vector3DLength)(0);

let lineLength = curry(vector3DLength)(0)(0);
// console.log(vector2DLength(3, 2));
// console.log(reduce(add, 0, [1, 2, 3]));
console.log(map(inc, [1, 2, 3]));
console.log(map(inc2, [1, 2, 3]));
console.log(inc(inc(3)));
console.log(inc2(inc2(3)));
console.log(inc3(inc3(3)));
console.log(add(1, 2));
console.log(sort([6,2,1,8,0,4]));
console.log(sort([]));