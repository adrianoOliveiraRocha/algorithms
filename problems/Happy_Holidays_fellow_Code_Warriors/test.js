'use strict'
const sortGiftCode = require('./main');
const Test = {
  test1() {
    console.log(sortGiftCode("abcdef"));
  },

  test2() {
    console.log(sortGiftCode("pqksuvy"));
  },

  test3() {
    console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba"));
  }
}

Test.test1();
Test.test2();
Test.test3();
