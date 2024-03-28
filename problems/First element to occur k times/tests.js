'use strict'

const firstElementKTime = require('./main');

const Test = {
  test1() {
    let arr = [1, 7, 4, 3, 4, 8, 7];
    let n = 7, k = 2;
    console.log(firstElementKTime(arr, n, k))
  }
}

Test.test1();