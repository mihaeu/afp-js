let add = (a, b) => a + b;
// let inc = (a, b) => a + 1;
let applyFn = (fn, x) => (y) => fn(x, y);
// let inc = applyFn(add, 1);
// let map = (fn, xs) => {
//   if (xs.length === 0) return [];
//   return [fn(xs[0])].concat(map(fn, xs.slice(1)));
// }
let vector3DLength = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
let curry = (fn, ...args) => fn.length === args.length ? fn(...args) : curry.bind(this, fn, ...args);
// let map = (fn, xs) => !xs.length ? [] : [fn(xs[0])].concat(map(fn, xs.slice(1)));
// let reduce = (fn , value, xs) => !xs.length  ? value : reduce(fn, fn(value, xs[0]), xs.slice(1));
let inc = curry(add, 1);
let vector2DLength = curry(vector3DLength)(0);
let lineLength = curry(vector3DLength)(0)(0);

console.log(vector2DLength(3, 2));
// console.log(reduce(add, 0, [1, 2, 3]));
// console.log(map(inc, [1, 2, 3]));
// console.log(inc(inc(3)));
// console.log(add(1, 2));