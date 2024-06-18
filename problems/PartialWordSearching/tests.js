'use strict'

const wordSearch = require('./main')

const Test = {
  test1() {
    console.log(wordSearch('me', ["home", "milk", "Mercury", "fish"]));
  }
}

Test.test1();