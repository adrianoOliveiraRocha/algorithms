'use strict'

const getTotalX = require('./main');

const Tests = {
  test1() {
    let a = [2, 6], b = [24, 36]; 
    console.log(getTotalX(a, b));
  },

  test2() {
    let a = [1, 3], b = [2]; 
    console.log(getTotalX(a, b));
  }
}

// Tests.test1();
Tests.test2();