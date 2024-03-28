'use strict'

const duplicates = require("./main");

const Test = {
  test1() {
    let n = 4;
    let a = [0, 3, 1, 2];
    console.log(duplicates(a, n)); // Output: -1
  },

  test2() {
    let n = 5;
    let a = [2, 3, 1, 2, 3];
    console.log(duplicates(a, n)); // Output: 2 3
  },

  test3() {
    let n = 2;
    let a = [0, 0]
    console.log(duplicates(a, n)); //output 0
  },

  test4() {
    let n = 26;
    let a = [13, 9, 25, 1, 1, 0, 22, 13, 22, 20, 3, 8, 11, 25, 10, 3, 15, 11, 19, 20, 2, 4, 25, 14, 23, 14];
    console.log(duplicates(a, n));
  }
}

Test.test1(); // Output: -1
Test.test2(); // Output: 2 3
Test.test3(); // Output 0
Test.test4(); // 1 3 11 13 14 20 22 25