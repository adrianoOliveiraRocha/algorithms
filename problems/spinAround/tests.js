'use strict'
const spinAround = require('./spinAround')

const Test = {
  test1() {
    let turns = ['left', 'right', 'left', 'right'] // 0
    console.log('res: ', spinAround(turns)) 
  },

  test2() {
    let turns = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'] // 2
    console.log('res: ', spinAround(turns)) // 2
  },

  test3() {
    let turns = ['left', 'left', 'left', 'left'] // 1;
    console.log('res: ', spinAround(turns)) 
  },

  test4() {
    let turns = []// 0;
    console.log('res: ', spinAround(turns)) 
  },

  test5() {
    let turns = ['left'] // 0
    console.log('res: ', spinAround(turns)) 
  },

  test6() {
    let turns = ['right'] // 0
    console.log('res: ', spinAround(turns)) 
  },

  test7() {
    let turns = ['right', 'right', 'right', 'left', 'right', 'right'] // 1
    console.log('res: ', spinAround(turns)) 
  },

  test8() {
    let turns = ['left', 'left', 'right', 'left', 
                  'left', 'left', 'left', 'left', 
                  'left', 'right', 'left', 'left', 
                  'right', 'right', 'right', 'right', 
                  'left', 'left', 'right', 'right'] // 1;
    console.log('res: ', spinAround(turns)) 
  }
}

Test.test1();
Test.test2();
Test.test3();
Test.test4();
Test.test5();
Test.test6();
Test.test7();
Test.test8(); 
