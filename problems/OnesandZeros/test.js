'use strict'
const binaryArrayToNumber = require('./main')

const Test = {
  test1() {
    console.log(binaryArrayToNumber([1, 0, 1, 1]));
  }
}

Test.test1();