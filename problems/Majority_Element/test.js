'use strict'
const fs = require('fs');
const majorityElement = require('./main')

const Test = {
  test1() {
    let size = 3 
    let a = [1,2,3]
    console.log(majorityElement(a, size));
  },

  test2() {
    let size = 5 
    let a = [3,1,3,3,2]
    console.log(majorityElement(a, size));
  },

  test3() {
    let size = 1 
    let a = [15]
    console.log(majorityElement(a, size));
  },

  test4() {
    let size = 938553;
    let data = fs.readFileSync('fileInput.txt', 'utf8');
    let prepare = data.split(' ');
    let a = []
    for(let i = 0; i < prepare.length; i++) {
      a.push(parseInt(prepare[i]));
    }
    console.log(majorityElement(a, size));
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();