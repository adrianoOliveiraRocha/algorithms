'use strict'

const findIndex = require("./main");

const Tests = {
  test1() {
    let arr = [1, 2, 3, 4, 5, 5];
    let key = 5
    console.log(findIndex(arr, arr.length, key)) //Output:  4 5
  },

  test2() {
    let arr = [6, 5, 4, 3, 1, 2];
    let key = 4;
    console.log(findIndex(arr, arr.length, key)) //Output:  2 2
  },

  test3() {
    let arr = [21, 11, 30, 17, 30, 18, 13, 23, 10, 30, 11, 15, 21, 13, 13, 24, 25, 11, 15, 30, 15, 18, 13];
    let key = 899;
    console.log(findIndex(arr, arr.length, key)) //Output:  -1 -1
  }
}

Tests.test1();
Tests.test2();
Tests.test3();