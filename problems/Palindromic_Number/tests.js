'use strict'

const PalinArray = require("./main");

const Test = {
  test1() {
    // 1
    let n = 5;
    let arr = [111, 222, 444, 555];
    console.log(PalinArray(arr, n));
  },

  test2() {
    // 0
    let n = 3;
    let arr = [121, 131, 20];
    console.log(PalinArray(arr, n));
  }
}

Test.test1();
Test.test2();