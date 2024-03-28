'use strict'

const Queue = (function() {

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
    return this.array[0];
  }

  main.prototype.enqueue = function(value) {
    this.array.push(value)
  }

  main.prototype.dequeue = function() {
    return this.array.shift();
  }

  return main;
  
})();

module.exports = Queue;
