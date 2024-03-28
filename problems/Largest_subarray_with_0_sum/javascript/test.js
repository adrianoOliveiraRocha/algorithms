'use strict'

const Solution = require("./main");

const Test = {
  test1() {
    let n = 8;
    let a = [15, -2, 2, -8, 1, 7, 10, 23];
    console.log(new Solution().maxLenBruteForce(a, n));
  },

  test2() {
    let n = 8;
    let a = [45, 14, 15, -2, 2, -8, 1, 7, 10, 23];
    console.log(new Solution().maxLenBruteForce(a, n));
  }
}

Test.test1();
// Test.test2();