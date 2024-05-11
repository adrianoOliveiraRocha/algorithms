'use strict'

import diff from "./index.js";

const  Test = {
  test1() {
    //(diff(["a","b"], ["a","b"]), [])
    console.log(diff(["a","b"], ["a","b"]));
  }, 
  
  test2() {
    console.log(diff(["c","b", "a"], ["a","b"]));
  },

  test3() {
    console.log(diff(["a","b"], ["a","b", "c"]));
  },

  test4() {
    console.log(diff(["a","b", "c"], ["a","b", "d"]));
  }
}

Test.test2();