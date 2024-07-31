'use strict'
const countDifferentMatrices = require('./main.js')

const Tests = {
  test1() {
    let ms = [[1, 2, 3, 4],
              [3, 1, 4, 2],
              [4, 3, 2, 1],
              [2, 4, 1, 3]];
    console.log(countDifferentMatrices(ms)) // 1
  },

  test2() {
    let ms = [[3, 1, 2, 3],
          [3, 1, 2, 3],
          [1, 3, 3, 2],
          [3, 2, 1, 3]];
    console.log(countDifferentMatrices(ms)) // 1
  }
}

Tests.test1() // 1
Tests.test2() // 1
