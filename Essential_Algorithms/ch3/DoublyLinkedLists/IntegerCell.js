'use strict'

const IntegerCell = (function() {

  function main(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  return main;

})();

module.exports = IntegerCell;