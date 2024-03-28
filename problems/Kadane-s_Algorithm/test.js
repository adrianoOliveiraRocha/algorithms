'use strict'
const maxSubarraySum = require('./main')

const Test = {
  test1() {
    let n = 5
    let arr = [1,2,3,-2,5]
    console.log(maxSubarraySum(arr, n))
  },

  test2() {
    let n = 4
    let arr = [-1,-2,-3,-4]
    console.log(maxSubarraySum(arr, n))
  },

  test3() {
    /*
    For Input: 
    9
    -2 1 -3 4 -1 2 1 -5 4
    Your Code's output is: 
    2
    It's Correct output is: 
    6
    Output Difference
    2 6
    */
    let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    console.log(maxSubarraySum(arr, arr.length))
  }
}

Test.test1();
Test.test2()
Test.test3();