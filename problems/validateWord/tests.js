'use strict'

const validateWord = require('./validateWord');

const Tests = {
  test0() {
    //"abcabc" true
    console.log(validateWord("abcabc"));
  },

  test1() {
    //"abcabcd" false
  }
}

Tests.test0();