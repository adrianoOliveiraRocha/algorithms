'use strict'

const longestCommonPrefix = require("./main");

const Test = {
  test1() {
    let arr = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
    console.log(longestCommonPrefix(arr, arr.length));
  },
  
  test2() {
    let arr = ['hello', 'world'];
    console.log(longestCommonPrefix(arr, arr.length));
  }
}

Test.test1();
Test.test2();
