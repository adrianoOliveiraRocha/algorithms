'use strict'
const sort012 = require('./main.js');

const Test = {
  test1() {
    let n = 5;
    let arr= [0, 2, 1, 2, 0];
    sort012(arr, n);
  },

  test2() {
    let n = 3;
    let arr= [0, 1, 0];
    console.log(sort012(arr, n));
  },

  test3() {
    let arr= [0, 1, 0]
    console.log(arr);
    [arr[0], arr[1]] = [arr[1], arr[0]]
    console.log(arr);
  }
}
/*
Test.test1();
console.log("\n");
Test.test2();
*/
Test.test3()