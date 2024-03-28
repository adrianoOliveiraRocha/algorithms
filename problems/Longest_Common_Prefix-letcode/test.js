'use strict'

const longestCommonPrefix = require("./main");

const Test = {
  test1() {
    let strs = ["flower","flow","flight"];
    console.log(longestCommonPrefix(strs));
  },

  test2() {
    let strs = ["dog","racecar","car"];
    console.log(longestCommonPrefix(strs));
  },

  test3() {
    let strs = ["adoiuu","adoijk","adnjgbhh"];
    console.log(longestCommonPrefix(strs));
  }
}

Test.test1();
// Test.test2();
// Test.test3();