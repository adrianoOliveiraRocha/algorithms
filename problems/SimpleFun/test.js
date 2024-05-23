'use strict'

const repeatSequenceLen = require('./main')

const Test = {
  test1() {
    console.log(repeatSequenceLen(1)) // 1
  },

  test2() {
    /** the first to reapeat is the 37. What the size from the 
     * first 37 to second 37*/
    console.log(repeatSequenceLen(3)) // 9
  },

  test3() {
    console.log(repeatSequenceLen(123)) // 14
  },

  test4() {
    console.log(repeatSequenceLen(85)); // 8
  }
}

Test.test1(); // 1
Test.test2(); // 9
Test.test3(); // 14
Test.test4(); // 8
