'use strict'

const isBinary = require("./main");

const Test = {
  test1() {
    let str = '101';
    console.log(isBinary(str));
  },

  test2() {
    let str = '75';
    console.log(isBinary(str));
  },

  test3() {
    let str = '0111100110101100';
    console.log(isBinary(str)); // 1
  }
}

Test.test1();
Test.test2();
Test.test3();