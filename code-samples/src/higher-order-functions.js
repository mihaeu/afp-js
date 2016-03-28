module.exports = {

  imperativeFilter() {
    // @sample start: filter-imperative
    var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0, result = []; i < data.length; i++) {
      if (data[i] % 2 === 0) {
        result.push(data[i]);
      }
    }
    return result;
    // @sample end: filter-imperative
  },

  functionalFilter() {
    // @sample start: filter-functional
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(i => i % 2 === 0);
    // @sample end: filter-functional
  },

  imperativeMap() {
    // @sample start: map-imperative
    data = [0, 1, 2, 3];
    for (var i = 0, result = []; i < data.length; i++) {
      result.push(data[i] * data[i]);
    }
    return result;
    // @sample end: map-imperative
  },

  functionalMap() {
    // @sample start: map-functional
    return [0, 1, 2, 3].map(i => i * i);
    // @sample end: map-functional
  },

  imperativeReduce() {
    'use strict';
    // @sample start: reduce-imperative
    let sum = 0;
    for (const i of [1, 2, 3, 4]) {   // neues immutable for seit ES6
      sum += i;
    }
    return sum;
    // @sample end: reduce-imperative
  },

  functionalReduce() {
    // @sample start: reduce-functional
    return [1, 2, 3, 4].reduce((i, j) => i + j);
    // @sample end: reduce-functional
  }
};
