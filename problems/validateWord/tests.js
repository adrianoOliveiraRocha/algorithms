'use strict'

const validateWord = require('./validateWord');

const Tests = {
  test0() {
    console.log(validateWord("abcabc"));
  },

  test1() {
    console.log(validateWord("Abcabc"));
  }
}

