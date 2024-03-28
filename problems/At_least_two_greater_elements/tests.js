'use strict'

const Solution = require("./main")

const Tests = {
  test1() {
    let arr = [2, 8, 7, 1, 5]
    let solution = new Solution();
    console.log(solution.findElements(arr, arr.length)); //1 2 5 
  },

  test2() {
    let arr = [7, -2, 3, 4, 9, -1]
    let solution = new Solution();
    console.log(solution.findElements(arr, arr.length)); //-2 -1 3 4 
  }
}

Tests.test1()
Tests.test2()
