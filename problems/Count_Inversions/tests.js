'use strict'
const fs = require('fs');

const inversionCount = require("./main");

const Tests = {
  test1() {
    console.log('test 1')
    let arr = [2, 4, 1, 3, 5];
    console.log(inversionCount(arr, arr.length)); // 3
  },

  test2() {
    let arr = [2, 3, 4, 5, 6];
    console.log(inversionCount(arr, arr.length)); // 0
  },

  test3() {
    let arr = [10,10,10];
    console.log(inversionCount(arr, arr.length)); // 0
  },

  test4() {
    let arr = [4, 11, 3, 6, 8];
    console.log(inversionCount(arr, arr.length)); // 4
  },

  test5() {
    let arr = [5, 6, 1, 12, 30];
    console.log(inversionCount(arr, arr.length)); // 2
  },

  test6() {
    let strarr = fs.readFileSync('./case0/data.txt')
    .toString()
    .split(" ");
    let arr = [];
    strarr.forEach(el => {
      arr.push(parseInt(el));
    })
    console.log(inversionCount(arr, arr.length)); // 494    
  }
}

Tests.test1(); // 3
// Tests.test2(); // 0
// Tests.test3(); // 0
// Tests.test4(); // 4
// Tests.test5(); // 2
// Tests.test6(); // 494 
