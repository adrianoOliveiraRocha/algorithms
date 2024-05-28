'use strict'
const trigrams = require('./main')

const Test = {
  test1() {
    console.log(trigrams('"the quick red"'))
  }
}

Test.test1()

