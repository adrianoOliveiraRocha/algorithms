'use strict'
const checkExam = require('./main');

const Test = {
  test1() {
    console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
  }
}

Test.test1();