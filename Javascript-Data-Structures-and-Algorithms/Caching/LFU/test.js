const LFUCache = require("./LFUCache");

const Test = (function() {
  return {
    testLFU() {
      let myLFU = new LFUCache(5);
      myLFU.set(1, 1);
      myLFU.set(2, 2);
      myLFU.set(3, 3);
      myLFU.set(4, 4);
      myLFU.set(5, 5);
      console.log(myLFU.get(1));
      console.log(myLFU.get(1));
      console.log(myLFU.get(1));
      myLFU.set(6, 6);
      console.log(myLFU.get(6));
    }
  }
})();

Test.testLFU();

