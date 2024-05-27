'use strict'

const rotateMatrix = require('./main');

const Test = {
  test1() {
    let matrix = [[-1, 4, 5], [ 2, 3, 4]]
    console.log(rotateMatrix(matrix))
  }
}

Test.test1();