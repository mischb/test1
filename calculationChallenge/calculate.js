(function () {
  module.exports = function () {
    this.zero = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 0);
      } else {
        return 0;
      }
    };

    this.one = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 1);
      } else {
        return 1;
      }
    };

    this.two = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 2);
      } else {
        return 2;
      }
    };

    this.three = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 3);
      } else {
        return 3;
      }
    };

    this.four = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 4);
      } else {
        return 4;
      }
    };

    this.five = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 5);
      } else {
        return 5;
      }
    };

    this.six = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 6);
      } else {
        return 6;
      }
    };

    this.seven = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 7);
      } else {
        return 7;
      }
    };

    this.eight = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 8);
      } else {
        return 8;
      }
    };

    this.nine = function () {
      if (arguments.length) {
        return arguments[0][0](arguments[0][1], 9);
      } else {
        return 9;
      }
    };

    this.plus = function (rightNum, leftNum) {
      // Just in case this function is called without Numbers passed in
      if (typeof leftNum === 'number' && typeof rightNum === 'number') {
        return leftNum + rightNum;
      } else if (typeof rightNum === 'number') {
        return [this.plus, rightNum];
      }
    };

    this.minus = function (rightNum, leftNum) {
      if (typeof leftNum === 'number' && typeof rightNum === 'number') {
        return leftNum - rightNum;
      } else if (typeof rightNum === 'number') {
        return [this.minus, rightNum];
      }
    };

    this.times = function (rightNum, leftNum) {
      if (typeof leftNum === 'number' && typeof rightNum === 'number') {
        return leftNum * rightNum;
      } else if (typeof rightNum === 'number') {
        return [this.times, rightNum];
      }
    };

    this.dividedBy = function (rightNum, leftNum) {
      if (typeof leftNum === 'number' && typeof rightNum === 'number') {
        return leftNum / rightNum;
      } else if (typeof rightNum === 'number') {
        return [this.dividedBy, rightNum];
      }
    };
  };
})();