'use strict'
const flickSwitch = require('./flicksWith');

const Test = {
  test1() {
    let arr = ['codewars', 'flick', 'code', 'wars'];
    console.log(flickSwitch(arr)); // [True, False, False, False]
  },

  test2() {
    let arr = ['flick', 'chocolate', 'adventure', 'sunshine'];
    console.log(flickSwitch(arr)); // [False, False, False, False]
  }
}

Test.test1();
Test.test2();
