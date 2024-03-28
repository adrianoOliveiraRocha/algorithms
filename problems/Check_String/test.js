'use strict'

const check = require("./main");

const Test = {
  test1() {
    let s = "geeks";
    console.log(check(s));
  },

  test2() {
    let s = "gggg";
    console.log(check(s));
  }
}

Test.test1();
Test.test2();
