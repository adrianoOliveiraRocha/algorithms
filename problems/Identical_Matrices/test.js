'use strict'

const areMatricesIdentical = require("./main");

const Test = {
  test1() {
    let n=2;
    let grid1=[[1,2],[3,4]];
    let grid2=[[1,2],[3,4]];
    console.log(areMatricesIdentical(n, grid1, grid2));
  },

  test2() {
    let n=2;
    let grid1=[[1,2],[3,4]];
    let grid2=[[1,2],[3,2]];
    console.log(areMatricesIdentical(n, grid1, grid2));
  },

  test3() {
    let n=2;
    let grid1=[[1,2],[3,4]];
    let grid2=[[1,2],[3,-4]];
    console.log(areMatricesIdentical(n, grid1, grid2));
  },
  
}

Test.test1();
Test.test2();
Test.test3();