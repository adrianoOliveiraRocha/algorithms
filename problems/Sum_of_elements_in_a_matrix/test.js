'use strict'

const sumOfMatrix = require("./main");

const Test = {
  test1() {
    let N = 2, M = 3;
    let Grid = [ [ 1, 0, 1 ], [ -8, 9, -2 ] ];
    console.log(sumOfMatrix(N, M, Grid));
  },

  test2() {
    let N=3, M=5;
    let Grid =
    [[1,0,1,0,1],
    [0,1,0,1,0],
    [-1,-1,-1,-1,-1]];
    console.log(sumOfMatrix(N, M, Grid));
  }
} 

Test.test1();
Test.test2();