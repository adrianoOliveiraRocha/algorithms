'use strict'

const Solution = require("./main");

const Tests = {
  test1() {
    let n = 192;
    let s = new Solution();
    console.log(s.fascinating(n))
  },

  test2() {
    let n = 853;
    let s = new Solution();
    console.log(s.fascinating(n))
  },

  test3() {
    let n = 10492;
    let s = new Solution();
    console.log(s.fascinating(n))
  },

}

Tests.test1();
Tests.test2();
Tests.test3();
