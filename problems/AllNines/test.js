'use strict'
/*
TypeError: Cannot mix BigInt and other types, use explicit conversions
at allNines (test.js:3:8)
at Context.<anonymous> (test.js:36:26)
at process.processImmediate (node:internal/timers:471:21)

*/
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