'use strict'

const removeDuplicates = require("./main")

const Test = {
  test1() {
    // Output: 2, nums = [1,2,_]
    let nums = [1,1,2]
    console.log(removeDuplicates(nums));
  },

  test2() {
    // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    let nums = [0,0,1,1,1,2,2,3,3,4]
    console.log(removeDuplicates(nums));
  }
}

Test.test1();
Test.test2();
