'use strict'
const operate = require('./main')

const Tests = {
  test1() { //ok
    console.log("test1(): ", operate([4,6,7,10], "T1")) //[5,7,8,11]
  },

  test2() { //ok
    console.log("test2(): ", operate([10,6,7], "T10")) //[4,5,8] //sorted
  },

  test3() { //ok
    console.log("test3(): ", operate([4,6,7,10], "T1I")) //[3,6,7,9] //sorted
  },

  test4() {
    console.log("test4(): ", operate([10,6,7], "T10I")) //[0,3,4] //sorted
  },

  test5() {
    console.log("test4(): ", operate([1,2,3], "T11")) //[0,1,2]
  }
}

Tests.test1();
Tests.test2();
Tests.test3();
Tests.test4();
Tests.test5()
