'use strict'

const divisibleSumPairs = require("./main")

const Test = {
  test1() {
    let ar = [1, 2, 3, 4, 5, 6]
    let k = 5
    console.log(divisibleSumPairs(ar.length, k, ar))
  },

  test2() {
    let ar = [1, 3, 2, 6, 1, 2]
    let k = 3
    console.log(divisibleSumPairs(ar.length, k, ar))
  }
}

Test.test1();
Test.test2();