'use strict'
const Solution = require('./main');

const Tests = {
  test1() {
    let k = 2, n = 4;
    let arr = [1, 5, 8, 10];
    console.log(new Solution().getMinDiff(arr, arr.length, k));
  }
}

Tests.test1();