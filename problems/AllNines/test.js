'use strict'

const allNines = require('./main')

const Test = {
  test12() {
    console.log(allNines(12))
  },

  test11() {
    console.log(allNines(11))
  },

  test13() {
    console.log(allNines(13))
  }
}

// Test.test12()
// Test.test11()
Test.test13()