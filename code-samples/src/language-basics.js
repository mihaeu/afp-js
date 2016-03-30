'use strict';
module.exports = {
  countSheep() {
    // @sample start: language-basics
    var schlafEin = (anzahlSchafe) => {
      var i = 0, ausgabe = [];
      for (i = anzahlSchafe; i > 0; --i) {
        if (i === 1) {
          ausgabe.push(1 + " Schaf");
        } else {
          ausgabe.push(i + " Schafe");
        }
      }
      return ausgabe.join("\n") + "\nZzzz ...";
    };
    schlafEin(5);
    // @sample end: language-basics
    return schlafEin(5);
  },

  functionalScoping() {
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

    return [func(false), func(true)];
  },

  typeInference() {
     return [
     0 == '',           // true

      0 == '0',         // true

      '' == '0',        // false


      false == 'false', // false

      false == '0',     // true

      " \t\r\n " == 0   // true
    ];
  }
};