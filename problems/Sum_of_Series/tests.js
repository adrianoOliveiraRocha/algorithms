'use strict'

const Solution = require("./main")

const Test = {
  test1() {
    let n = 1;
    let solution = new Solution();
    console.log(solution.seriesSum(1));
  },

  test2() {
    let n = 9;
    let solution = new Solution();
    console.log(solution.seriesSum(n));
  },

  test3() {
  
  }
}

Test.test1()
Test.test2()