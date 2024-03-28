'use strict'
const kthSmallest = require('./main');

const Test = {
  test1() {
    let n = 6;
    let arr = [7, 10, 4, 3, 20, 15];
    let k = 3;
    console.log(kthSmallest(arr, 0, arr.length-1, k)); // Output : 7
  },

  test2() {
    let n = 5;
    let arr = [7, 10, 4, 20, 15];
    let k = 4;
    console.log(kthSmallest(arr, 0, arr.length-1, k)); // Output : 15
  }
}

Test.test1();
Test.test2();