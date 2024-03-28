'use strict'
const getMinimumDifference = require('./main');

const Test = {
  test1() {
    let root = [4,2,6,1,3];
    console.log(getMinimumDifference(root));
  },
  test2() {
    let root = [1,0,48,null,null,12,49];
    console.log(getMinimumDifference(root));
  }
}

Test.test1()
// Test.test2()
