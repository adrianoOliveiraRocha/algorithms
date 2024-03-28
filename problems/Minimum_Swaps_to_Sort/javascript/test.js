'use strict'

const minSwaps = require('./main.js');
const Test = {
  test1() {
    let nums = [2, 8, 5, 4];
    console.log(minSwaps(nums)); // 1
  },
  
  test2() {
    let nums = [10, 19, 6, 3, 5];
    console.log(minSwaps(nums)); // 2
  },
  
  test3() {
    let nums = [7, 16, 14, 17, 6, 9, 5, 3, 18];
    console.log(minSwaps(nums)); // 5
  }
}

Test.test1();
// Test.test2();
// Test.test3();
