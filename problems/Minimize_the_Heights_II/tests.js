'use strict'
const Solution = require('./main');

const Tests = {
  test1() {
    let k = 2, n = 4;
    let arr = [1, 5, 8, 10];
    console.log(new Solution().getMinDiff(arr, arr.length, k)); // 5
  },

  test2() {
    let k = 3, n = 5;
    let arr = [3, 9, 12, 16, 20];
    console.log(new Solution().getMinDiff(arr, arr.length, k)); // 11
  }
}

Tests.test1();
Tests.test2();