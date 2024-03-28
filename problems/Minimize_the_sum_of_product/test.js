'use strict'

const minValue = require("./main");

const Test = {
  test1() {
    let a = [3, 1, 1];
    let b = [6, 5, 4];
    console.log(minValue(a, b, a.length)); // 23
  },

  test2() {
    let a = [6, 1, 9, 5, 4];
    let b = [3, 4, 8, 2, 4];
    console.log(minValue(a, b, a.length)); //80
  }
}

Test.test1();
// Test.test2();
