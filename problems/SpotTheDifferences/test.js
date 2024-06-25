'use strict'
const spot = require('./main.js')

const Test = {
  test1() {
    console.log(spot("abcdefg", "abcqetg"))
  }
}

Test.test1()
