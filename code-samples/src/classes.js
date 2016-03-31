"use strict";
module.exports = {
  es5: () => {
    // @sample start: es5-class
    var Animal = (function() {
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.move = function(meters) {
        return this.name + " moves " + meters + "m.";
      };

      return Animal;
    })();
    // @sample end: es5-class

    // @sample start: es5-inheritance
    function Snake(name, isPoisonous) {
      Animal.call(this, name); // super(name)
      this.isPoisonous = isPoisonous;
    }

    Snake.prototype = Object.create(Snake.prototype);
    Snake.prototype.constructor = Snake;
    Snake.prototype.move = function (meters) {
      return this.name + " wiggles " + meters + "m.";
    };
    // @sample end: es5-inheritance
    var snake = new Snake('Snake');
    return new Animal("Platypus").move(3) + snake.move(3);
  },

  es6: () => {
    // @sample start: es6-class
    class Animal {
      constructor(name) {
        this.name = name;
      }
      move(meters) {
        return this.name + " moves " + meters + "m.";
      }
    }

    class Snake extends Animal {
      move(meters) {
        return this.name + " wiggles " + meters + "m."
      }
    }
    // @sample end: es6-class

    var snake = new Snake("Snake");
    return new Animal("Platypus").move(3) + snake.move(3);
  }
};
