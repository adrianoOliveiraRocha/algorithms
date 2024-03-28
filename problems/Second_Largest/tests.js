'use strict'
const print2largest = require('./main');

const Tests = {
  test1() {
    let n = 6
    let a = [12, 35, 1, 10, 34, 1]
    console.log(print2largest(a, n))
  },

  test2() {
    let n = 3
    let a = [10, 5, 10];
    console.log(print2largest(a, n));
  },

  test3() {
    let n = 21;
    let a = [642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642, 642];
    console.log(print2largest(a, n))
  }
}

Tests.test1(); // 34
Tests.test2(); // 5
Tests.test3(); // -1