'use strict'
const IsPerfect = require('./main');

const Tests = {
  test1() {
    let arr = [1, 2, 3, 2, 1];
    console.log(IsPerfect(arr, arr.length));
  },
  
  test2() {
    let arr = [1, 2, 3, 4, 5];
    console.log(IsPerfect(arr, arr.length));
  }
}

Tests.test1();
// Tests.test2();