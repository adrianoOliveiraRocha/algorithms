'use strict'
const main = require('./main');

const Test = {
  test1() {
    console.log(main([1,0,1,0,1,0])); 
  },

  test2() {
    console.log(main([0,1,0,0,1,0])); 
  },

  test3() {
    console.log(main([0,1,0,1,1,0])); 
  }
}

Test.test1();
Test.test2();
Test.test3();