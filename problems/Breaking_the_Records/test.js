'use strict'

const breakingRecords = require("./main");

const Test = {
  test1() {
    let scores = [
      10, 5, 20, 20, 4,
       5, 2, 25,  1
    ];
    console.log(breakingRecords(scores)); 
  },

  test2() {
    let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
    console.log(breakingRecords(scores));
  }
}

// Test.test1()
Test.test2()