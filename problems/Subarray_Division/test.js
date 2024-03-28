'use strict'

const birthday = require("./main");

const Test = {
  test1() {
    let s = [2, 2, 1, 3, 2];
    let d = 4, m = 2;
    console.log(birthday(s, d, m)); // 2
  },

  test2() {
    let s = [1, 2, 1, 3, 2];
    let d = 3, m = 2;
    console.log(birthday(s, d, m)); // 2
  },

  test3() {
    let s = [1, 1, 1, 1, 1, 1];
    let d = 3, m = 2;
    console.log(birthday(s, d, m)); // 0
  },

  test4() {
    let s = [4];
    let d = 4, m = 1;
    console.log(birthday(s, d, m)); // 1
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();
