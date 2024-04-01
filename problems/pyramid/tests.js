'use strict'

const pyramid = require('./pyramid');

const Tests = {
  test0() {
    console.log(pyramid(0));
  }, 

  test1() {
    console.log(pyramid(1));
  },

  test2() {
    console.log(pyramid(2));
  },

  test4() {
    console.log(pyramid(4));
  },

  test6() {
    console.log(pyramid(6));
  },

  test10() {
    console.log(pyramid(10));    
  }
}

Tests.test1();
Tests.test2();
Tests.test4();
Tests.test6();
Tests.test10();
