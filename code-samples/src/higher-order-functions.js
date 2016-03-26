module.exports = {

  imperativeFilter() {
    // @sample start: filter-imperative
    data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  }

};
