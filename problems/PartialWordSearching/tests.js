'use strict'

const wordSearch = require('./main')

const Test = {
  test1() {
    console.log(wordSearch('me', ["home", "milk", "Mercury", "fish"]));
  },

  test2() {
    /*Error 
    Expected: '[\'ab\', \'abc\', \'zab\']', instead got: '[\'Empty\']'*/
    console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]));
  }
}

Test.test2();