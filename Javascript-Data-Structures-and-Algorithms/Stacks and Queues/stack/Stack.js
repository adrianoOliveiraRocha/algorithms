'use strict'

const Stack = (function() {
  
  function main(array) {
    if(array) this.array = array;
    else this.array = [];
  }

  main.prototype.getBuffer = function() {
    return this.array.slice();
  }

  main.prototype.isEmpty = function() {
    return this.array.length == 0;
  }

  main.prototype.peek = function() {
    return this.array[this.array.length - 1];
  }

  main.prototype.push = function(value) {
    this.array.push(value);
  }

  main.prototype.pop = function() {
    return this.array.pop();
  }

  return main;

})();

module.exports = Stack;