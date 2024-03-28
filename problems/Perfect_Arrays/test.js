'use strict'

const IsPerfect = require("./main");

const Test = {
  test1() {
    let arr = [1, 2, 3, 2, 1];
    console.log("test1", arr)
    console.log(IsPerfect(arr)); //PERFECT
  },

  test2() {
    let arr = [1, 2, 3, 4, 5];
    console.log("test2", arr)
    console.log(IsPerfect(arr, arr.length)); //NOT PERFECT
  }
}

Test.test1();
Test.test2();

