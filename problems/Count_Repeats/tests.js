'use strict'

const countRepeats = require('./main.js');

const Tests = {
  test1() {
    // 'abbbbc'  => 'abc'    #  answer: 3
    console.log(countRepeats('abbbbc')); // ok
  },

  test2() {
    // 'abbcca'  => 'abca'   #  answer: 2
    console.log(countRepeats('abbcca')); //
  },

  test3() {
    // 'ab cca'  => 'ab ca'  #  answer: 1
    console.log(countRepeats('ab cca')); //
  }
}

Tests.test1();
Tests.test2();
Tests.test3();
