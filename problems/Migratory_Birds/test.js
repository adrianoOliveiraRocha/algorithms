'use strict'

const migratoryBirds = require("./main")

const Test = {
  test1() {
    let arr = [1, 1, 2, 2, 3]
    console.log(migratoryBirds(arr))
  },

  test2() {
    let arr = [1, 4, 4, 4, 5, 3]
    console.log(migratoryBirds(arr));
  }
}

Test.test1();
Test.test2();