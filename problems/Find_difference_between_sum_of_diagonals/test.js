'use strict'

const diagonalSumDifference = require("./main");

const Test = {
  test1() {
    let n = 3;
    let grid=[
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];
    console.log(diagonalSumDifference(grid, n)); // Output: 0
  },

  test2() {
    let n = 3;
    let grid=[
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ];
    console.log(diagonalSumDifference(grid, n)); // Output: 0
  },

  test3() {
    let n = 4;
    let grid=[
      [-29, -9, -66, -90],
      [-27, -41, -10, 65],
      [-14, 10, -46, -33],
      [26, 51, 9, -7]
    ];
    console.log(diagonalSumDifference(grid, n)); // Output: 0
  }
}

// Test.test1();
// Test.test2();
Test.test3();
