'use strict'

const rearrange = require("./main");

const Test = {
  test1() {
    console.log("test 1")
    let arr = [1,2,3,4,5,6], n = 6;
    rearrange(arr, n);
  },

  test2() {
    console.log("test 2")
    let arr = [1,2,3,4,5,6,7], n = 7;
    rearrange(arr, n);
  },
  
  test3() {
    let arr = [10,20,30,40,50,60,70,80,90,100,110], n = 11;
    rearrange(arr, n);
  } 
}

Test.test1();
Test.test2();