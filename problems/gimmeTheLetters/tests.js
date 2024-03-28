'use strict'
const gimmeTheLetters = require('./gimmeTheLetters');

const Tests = {
  test1() {
    let sp = "a-z"
    console.log(gimmeTheLetters(sp));
  },

  test2() {
    let sp = "h-o"
    console.log(gimmeTheLetters(sp));
  },

  test3() {
    let sp = "Q-Z"
    console.log(gimmeTheLetters(sp));
  }
}

Tests.test1();
Tests.test2();
Tests.test3();