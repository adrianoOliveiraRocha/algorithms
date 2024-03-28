'use strict'

const valueEqualToIndex = require('./main')

const Tests = {
  test1() {
    let n = 5
    let arr = [15, 2, 45, 12, 7]
    console.log(valueEqualToIndex(arr, n))
  },

  test2() {
    let n = 1
    let arr = [1]
    console.log(valueEqualToIndex(arr, n))  
  }
}

Tests.test1(); // 2
Tests.test2(); // 1