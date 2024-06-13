'use strict'
const gridPosition = require('./main')

const Test = {
  test() {
    console.log(gridPosition('Any', 13))
  },

  test1() {
    console.log(gridPosition('Any', 1))
  },

  test11() {
    console.log(gridPosition('Valentino Rossi', 11))
    //Output: Valentino Rossi starts from the middle of the 4th row
  },

  test2() {
    console.log(gridPosition('Jorge Martin', 2))
    //Output: 'Jorge Martin starts from the middle of the front row'
  }
}

Test.test();