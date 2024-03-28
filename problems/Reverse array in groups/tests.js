'use strict'
/*
type: 
const array = [ 'fatfish', 'medium', 'blog', 'fat', 'fish' ]

console.log(array.at(-1)) // fish
console.log(array.at(-2)) // fat
console.log(array.at(-3)) // blog
*/
const reverseInGroups = require('./reverseInGroups');

const Tests = {
  test1() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log("\ntest2 n = 6, k = 3");
    console.log(arr);
    let n = 6, k = 3;
    reverseInGroups(arr, n, k);
  },

  test2() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log("\ntest2 n = 7, k = 3");
    console.log(arr);
    let n = 7, k = 3;
    reverseInGroups(arr, n, k);
  },

  test3() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log("\ntest3 n = 8, k = 3");
    console.log(arr);
    let n = 8, k = 3;
    reverseInGroups(arr, n, k);
  },

  test4() {
    let arr = [5,6,8,9];
    console.log("\ntest4 n = 4, k = 3");
    console.log(arr);
    let n = 4, k = 3;
    reverseInGroups(arr, n, k);
  },

  test5() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("\ntest5 n = 9, k = 4");
    console.log(arr);
    let n = 10, k = 4;
    reverseInGroups(arr, n, k);
  },

  test6() {
    let arr = [35, 56, 48, 21, 87];
    console.log("\ntest5 n = 5, k = 77");
    console.log(arr);
    let n = 5, k = 77;
    reverseInGroups(arr, n, k);
  }
}
// Tests.test1();
// Tests.test2();
// Tests.test3();
// Tests.test4();
// Tests.test5();
Tests.test6();





