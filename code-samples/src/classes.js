module.exports = {
  es5: () => {
    "use strict";
    var Animal = (function() {
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.move = function(meters) {
        return this.name + " moved " + meters + "m.";
      };

      return Animal;
    })();

    function Snake(name, isPoisonous) {
      Animal.call(this, name); // super(name)
      this.isPoisonous = isPoisonous;
    }

    Snake.prototype = Object.create(Snake.prototype);
    Snake.prototype.constructor = Snake;
    Snake.prototype.move = function (meters) {
      return this.name + " wiggles " + meters + "m.";
    };
    var snake = new Snake('Snake');
    return snake.move(3);
  },

  es6: () => {
    "use strict";

    class Animal {
      constructor(name) {
        this.name = name;
      }
      move(meters) {
        return this.name + " moved " + meters + "m.";
      }
    }

    class Snake extends Animal {
      move(meters) {
        return this.name + " wiggles " + meters + "m."
      }
    }

    let snake = new Snake('Snake');
    return snake.move(3);
  }
};
