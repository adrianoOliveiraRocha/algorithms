'use strict'
const relativelyPrime = require('./main')

const Tests = {
  test1() {
    console.log(relativelyPrime(8, [1, 2, 3, 4, 5, 6, 7])) //>> [1, 3, 5, 7]
  },

  test2() {
    console.log(relativelyPrime(15, [72, 27, 32, 61, 77, 11, 40])) //>> [32, 61, 77, 11]
  },

  test3() {
    console.log(relativelyPrime(210, [15, 100, 2222222, 6, 4, 12369, 99])) //>> []
  },

  test4() {
    console.log(relativelyPrime(1, [2,3,4,5,6,7,8,9,10])) //>> []
  }
}

// Tests.test1()
// Tests.test2()
// Tests.test3()
Tests.test4()
