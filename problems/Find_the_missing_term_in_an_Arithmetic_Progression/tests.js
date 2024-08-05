'use strict'
const findMissing = require('./main.js')
const Tests = {
  test() {
    console.log(findMissing([1, 3, 5, 9, 11]))
  },

  test1() {
    console.log(findMissing([-1, -3, -5, -9, -11]))
  },

  test2() {
    console.log(findMissing([-9, -6, 0, 3, 6, 9]))
  },

  test3() {
    console.log(findMissing([9, 6, 3, 0, -3, -9]))
  }
}

Tests.test() // 7
Tests.test1() // -7
Tests.test2() // -3
Tests.test3() // -6
