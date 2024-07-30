'use strict'
const countDifferentMatrices = require('./main.js')

const Tests = {
  test1() {
    let matrices = [
      [1, 2, 3, 4],
      [3, 1, 4, 2],
      [4, 3, 2, 1],
      [2, 4, 1, 3]];
    console.log(countDifferentMatrices(matrices))
  }
}

Tests.test1()
