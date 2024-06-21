'use strict'
const operate = require('./main')

const Tests = {
  test1() {
    console.log(operate([4,6,7,10], "T1")) //[5,7,8,11]
  },

  test2() {
    console.log(operate([4,6,7,10], "T1I")) //[3,6,7,9] //sorted
  },

  test3() {
    console.log(operate([10,6,7], "T10")) //[4,5,8] //sorted
  },

  test4() {
    console.log(operate([10,6,7], "T10I")) //[0,3,4] //sorted
  },
}

Tests.test1();
Tests.test3();