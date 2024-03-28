'use strict'

const Queue = require("../queue/Queue");

const Cashier = (function() {
  function main() {
    this.customerQueue = new Queue();
  }

  main.prototype.addOrder = function(customer) {
    this.customerQueue.enqueue(customer);
  }

  main.prototype.deliverOrder = function() {
    console.log(this.customerQueue.dequeue());
  }

  return main;

})();

module.exports = Cashier;