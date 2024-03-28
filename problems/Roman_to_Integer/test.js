'use strict'

const romanToInt = require("./main")

const Test = {
  test1() {
    let s = "III";
    console.log(romanToInt(s));
  },

  test2() {
    let s = "LVIII";
    console.log(romanToInt(s));
  },

  test3() {
    let s = "MCMXCIV"; // 1994
    console.log(romanToInt(s));
  }
}

Test.test1();
Test.test2();
Test.test3();