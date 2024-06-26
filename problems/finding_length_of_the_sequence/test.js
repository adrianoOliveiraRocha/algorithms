'use strict'

const lengthOfSequence = require('./main')

const Tests = {
  test1() {
    let arr = [0, -3, 7, 4, 0, 3, 7, 9, 7], n = 7;
    console.log(lengthOfSequence(arr, n)) // 5
  },
  
  test2() {
    console.log(lengthOfSequence([1, 1], 1)) // 2
  },
  
  test3() {
    console.log(lengthOfSequence([1, 2, 3, 1], 1)) // 4
  },
  
  test4() {
    console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)) // 5
  },
  
  test5() {
    console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7)) // 4
  },
  
  test5() {
    console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7)) // 4
  }
}

Tests.test1()
