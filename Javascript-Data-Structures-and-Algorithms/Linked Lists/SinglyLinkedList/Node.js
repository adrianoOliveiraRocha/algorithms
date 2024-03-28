'use strict'

const Node = (function() {

  function main(data) {
    this.data = data;
    this.next = null;
  }

  return main;
  
})();

module.exports = Node;