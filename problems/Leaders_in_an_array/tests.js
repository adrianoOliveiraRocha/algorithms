'use strict'

const leaders = require('./main');

const Tests = {
  test1() {
    let n = 6;
    let a = [16,17,4,3,5,2];
    console.log(leaders(a, n));
  },

  test2() {
    let n = 5;
    let a = [1,2,3,4,0];
    console.log(leaders(a, n));
  },

  test3() {
    let n = 5;
    let a = [1,15,12,14,13];
    console.log(leaders(a, n));
  }
}

Tests.test3()
