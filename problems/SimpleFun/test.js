'use strict'

const repeatSequenceLen = require('./main')

const Test = {
  test1() {
    console.log(repeatSequenceLen(1)) // 1
  },

  test3() { 
    console.log(repeatSequenceLen(3)) // 9
  },

  test123() { 
    console.log(repeatSequenceLen(123)) // 14
  },

  test85() { 
    console.log(repeatSequenceLen(85)); // 8
  },

  test810() {
    console.log(repeatSequenceLen(810)); // 8
  },

  test812() {
    console.log(repeatSequenceLen(812)); // 8
  },

  test818() {
    console.log(repeatSequenceLen(818)); // 8
  }
}

Test.test1(); 
Test.test3(); 
Test.test123(); 
Test.test85(); 
Test.test810(); 
Test.test812()
Test.test818()