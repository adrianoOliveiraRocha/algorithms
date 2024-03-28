const IntegerCell = (function() {

  function main(value=null) {
    this.value = value;
    this.next = null;
  }
  
  return main;

})();

module.exports = IntegerCell;