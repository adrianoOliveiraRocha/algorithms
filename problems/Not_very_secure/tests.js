'use strict'

/*
All tests
Basic tests
Incorrect answer for string="

": expected true to equal false
Completed in 2ms
Random tests
Incorrect answer for string="kQlhJx5XTbcYFUxEWNa!J": expected true to equal false
*/
const alphanumeric = require('./main.js')
const Tests = {
  test() {
    console.log(alphanumeric("Mazinkaiser")); //true
  },

  test1() {
    console.log(alphanumeric("hello world_"));
  },

  test2() {
    console.log(alphanumeric("PassW0rd"));
  },

  test3() {
    console.log(alphanumeric("     "));
  }
}

Tests.test()
Tests.test1()
Tests.test2()
Tests.test3()
