'use strict'
const getMoreAndLess = require('./main');

const Tests = {
  test1() {
    let n = 7, x = 0;
    let arr = [1, 2, 8, 10, 11, 12, 19];
    console.log(getMoreAndLess(arr, n, x));  // Output: 0 7
  },

  test2() {
    let n = 7, x = 5;
    let arr = [1, 2, 8, 10, 11, 12, 19];
    console.log(getMoreAndLess(arr, n, x)); // Output: 2 5
  }
}

Tests.test1() // Output: 0 7
Tests.test2() // Output: 2 5