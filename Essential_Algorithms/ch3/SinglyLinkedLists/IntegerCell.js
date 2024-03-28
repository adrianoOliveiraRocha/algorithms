'use strict'

const IntegerCell = (function() {

  function main(value) {
    this.value = value;
    this.next = null;
  }

  return main;

})();

module.exports = IntegerCell;