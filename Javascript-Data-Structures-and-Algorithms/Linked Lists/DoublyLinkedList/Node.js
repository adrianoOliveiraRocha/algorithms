'use strict'

const Node = (function() {
  function main(data) {
    this.data = data;
    this.next;
    this.prev;
  }

  return main;

})();

module.exports = Node;