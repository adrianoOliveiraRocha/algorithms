'use strict'
const Solution = require('./main')

const Tests = {
  test1() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    let k = 3
    console.log(new Solution().swapKth(arr, arr.length, k))
  },

  test2() {
    let arr = [5, 3, 6, 1, 2]
    let k = 2
    console.log(new Solution().swapKth(arr, arr.length, k))
  }
}

Tests.test1()
Tests.test2()