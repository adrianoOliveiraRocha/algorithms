'use strict'

const Solution = require("./main")

const Test = {
  test1() {
    let arr = [7, 8, 3, 4, 2, 9, 5]
    let solution = new Solution()
    console.log(solution.leftElement(arr, arr.length))
  },

  test2() {
    let arr = [8, 1, 2, 9, 4, 3, 7, 5]
    let solution = new Solution()
    console.log(solution.leftElement(arr, arr.length))  
  }
}

Test.test1()
Test.test2()