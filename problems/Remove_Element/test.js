'use strict'

const removeElement = require("./main");

const Test = {
  test1() {
    let nums = [3,2,2,3], val = 3;
    console.log(removeElement(nums, val));
  }
}

Test.test1();