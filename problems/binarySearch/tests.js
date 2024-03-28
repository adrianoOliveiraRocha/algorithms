'use strict'

const binarysearch = require('./main');

const Test = {
  test1() { // ok
    let n = 5;
    let arr = [1, 2, 3, 4, 5]; 
    let k = 3;
    console.log(binarysearch(arr, n, k));
  },

  test2() { // ok
    let n = 7;
    let arr = [11, 33, 44, 55, 445, 500, 560]; 
    let k = 55;
    console.log(binarysearch(arr, n, k));
    
  },

  test3() { // ok
    let n = 9;
    let arr = [11, 22, 33, 44, 55, 56, 60, 67, 69]; 
    let k = 67;
    console.log(binarysearch(arr, n, k));
  },

  test4() { // ok
    let n = 6;
    let arr = [3, 4, 5, 6, 7, 8]; 
    let k = 7;
    console.log(binarysearch(arr, n, k));
  },

  test5() {
    let n = 9;
    let arr = [11, 22, 33, 44, 55, 56, 60, 67, 69]; 
    let k = 102;
    console.log(binarysearch(arr, n, k));
  },

  test6() {
    let n = 6;
    let arr = [3, 4, 5, 6, 7, 8]; 
    let k = 13;
    console.log(binarysearch(arr, n, k));
  },

  test7() { 
    let n = 5;
    let arr = [1, 2, 3, 4, 5]; 
    let k = 1;
    console.log(binarysearch(arr, n, k));
  },

  test8() {
    let n = 6;
    let arr = [3, 4, 5, 6, 7, 8]; 
    let k = 3;
    console.log(binarysearch(arr, n, k));
  },

  test9() { 
    let n = 5;
    let arr = [1, 2, 3, 4, 5]; 
    let k = 5;
    console.log(binarysearch(arr, n, k));
  },

  test10() {
    let n = 6;
    let arr = [3, 4, 5, 6, 7, 8]; 
    let k = 8;
    console.log(binarysearch(arr, n, k));
  },

}

// Test.test1();
// Test.test2();
// Test.test3();
// Test.test4();
// Test.test5();
// Test.test6();
// Test.test7();
// Test.test8();
Test.test9();
Test.test10();