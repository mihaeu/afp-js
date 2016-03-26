module.exports = {
  countSheep: () => {
    // @sample start: language-basics
    var schlafEin = function(anzahlSchafe) {
      var i = 0, ausgabe = [];
      for (i = anzahlSchafe; i > 0; --i) {
        if (i === 1) {
          ausgabe.push(1 + ' Schaf');
        } else {
          ausgabe.push(i + ' Schafe');
        }
      }
      return ausgabe.join("\n") + "\nZzzz ...";
    };
    schlafEin(5);
    // @sample end: language-basics
    return schlafEin(5);
  },

  functionalScoping: () => {
    'use strict';
    // @sample start: functional-scoping
    var x = 3;
    function func(randomize) {
      var x;
      if (randomize) {
        let x = Math.random();
        return x;
      }
      return x;
    }
    func(false);
    // @sample end: functional-scoping

    return func(false);
  }
};