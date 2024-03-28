'use strict'
const mergesort = require('./modules/mergesort');

const Tests = {
  test1() {
    let arr = [2, 4, 1, 3, 5];
    console.log("original: ", arr);
    console.log(mergesort(arr, arr.length)); // 3
  },

  test2() {
    let arr = [2, 3, 4, 5, 6];
    console.log("original: ", arr);
    console.log(mergesort(arr, arr.length)); // 0
  },

  test3() {
    let arr = [10,10,10];
    console.log("original: ", arr);
    console.log(mergesort(arr, arr.length)); // 0
  },

  test4() {
    let arr = [4, 11, 3, 6, 8];
    console.log("original: ", arr);
    console.log(mergesort(arr, arr.length)); // 4
  },

  test5() {
    let arr = [5, 6, 1, 12, 30];
    console.log("original: ", arr);
    console.log(mergesort(arr, arr.length)); // 2
  }
}

Tests.test1();