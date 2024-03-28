'use strict'

const Solution = require("./main")

const Test = {
  test1() {
    let arr = [1, 2, 3, 4, 5]
    let solution = new Solution();
    solution.printArray(arr, arr.length); //Output: 1 2 3 4 5
  },

  test2() {
    let arr = [2, 3, 5, 5];
    let solution = new Solution();
    solution.printArray(arr, arr.length); 
  },

  test3() {
    const fs = require('fs');
    let file = fs.readFileSync('files/fileInput.txt', 'utf-8');
    let arrString = file.split(' ')
    let arr = [];
    arrString.forEach(el => {
      arr.push(parseInt(el));
    })
    let solution = new Solution();
    solution.printArray(arr, arr.length); 
  }
}

// Test.test1();
// Test.test2();
Test.test3();