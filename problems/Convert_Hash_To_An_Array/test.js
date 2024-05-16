'use strict'
const convertHashToArray = require('./main');
const Test = {
  test1() {
    console.log(convertHashToArray(
      {name: 'Jeremy', age: 24, role: 'Software Engineer'}))
  }
}

Test.test1();