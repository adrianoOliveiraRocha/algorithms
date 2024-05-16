'use strict'
const checkExam = require('./main');

const Test = {
  test1() {
    console.log(checkExam(
      ["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6
  },

  test2() {
    console.log(checkExam(
      ["a", "a", "c", "b"], ["a", "a", "b", "" ])); //7
  },

  test3() {
    console.log(checkExam(
      ["a", "a", "b", "c"], ["a", "a", "b", "c"])); //16
  },

  test4() {
    console.log(checkExam(
      ["b", "c", "b", "a"], ["" , "a", "a", "c"])); //16
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();