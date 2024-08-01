'use strict'
const findMissing = require('./main.js')
const Tests = {
  test() {
    // findMissing([1, 3, 5, 9, 11]) == 7
    console.log(findMissing([1, 3, 5, 9, 11]))
  },

  test1() {
    console.log(findMissing([-1, -3, -5, -9, -11]))
  },

  test2() {
    console.log(findMissing([-6, -3, 0, 3, 9]))
  },

  test3() {
    console.log(findMissing([9, 3, 0, -3, -6]))
  }
}

Tests.test() // 7
Tests.test1() // -7
Tests.test2() // 6
Tests.test3() // 6
